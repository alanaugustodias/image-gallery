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

    /**
     * Get images using Giphy API
     * @param pageSize
     * @param pageNumber
     * @returns Promise<GalleryResponse>
     */
    public getImages(pageSize: number, pageNumber: number): Promise<GalleryResponse> {
        const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * pageSize;
        const query = [`api_key=${this.apiKey}`, `limit=${pageSize}`, `offset=${offset}`].join('&');
        return axios.get(`${this.gifsURL}?${query}`).then(({data}) => this.convertGiphyResponse(data));
    }

    /**
     * Convert the received data into GalleryResponse
     * @param param0
     * @returns GalleryResponse
     */
    private convertGiphyResponse({data}: GiphyGalleryResponse): GalleryResponse {
        return {
            images: data.map(({id, title, images}) => {
                const img: Images = {
                    preview: images.downsized,
                    original: images.original,
                };
                return {
                    id,
                    title,
                    images: img,
                };
            }),
        };
    }
}
