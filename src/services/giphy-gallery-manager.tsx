import {DefaultGalleryManager, GalleryResponse, GiphyGalleryResponse, Images} from '@app/interfaces';

import axios from 'axios';
import config from 'react-global-configuration';

export default class GiphyGalleryManager implements DefaultGalleryManager {
    private readonly gifsURL: string;
    private readonly apiKey: string;

    constructor() {
        this.gifsURL = config.get('giphyGifsURL');
        this.apiKey = config.get('apiKey');
    }

    public getImages(limit: number, offset?: number): Promise<GalleryResponse> {
        const query = [`api_key=${this.apiKey}`, `limit=${limit}`, `offset=${offset}`].join('&');
        return axios.get(`${this.gifsURL}?${query}`).then(({data}) => this.convertGiphyResponse(data));
    }

    private convertGiphyResponse({data, pagination}: GiphyGalleryResponse): GalleryResponse {
        return {
            images: data.map(({id, url, images}) => {
                const img: Images = {
                    preview: images.downsized,
                    original: images.original,
                };
                return {
                    id,
                    url,
                    images: img,
                };
            }),
            pagination: {
                total: pagination.total_count,
                count: pagination.count,
                offset: pagination.offset,
            },
        };
    }
}
