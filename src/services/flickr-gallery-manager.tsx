import {DefaultGalleryManager, FlickrGalleryResponse, GalleryResponse} from '@app/interfaces';

import axios from 'axios';
import config from 'react-global-configuration';

export default class FlickrGalleryManager implements DefaultGalleryManager {
    private readonly gifsURL: string;
    private readonly apiKey: string;

    constructor() {
        this.gifsURL = config.get('flickrGifsURL');
        this.apiKey = config.get('apiKey');
    }

    public getImages(limit: number, offset?: number): Promise<GalleryResponse> {
        const query = [`api_key=${this.apiKey}`, `limit=${limit}`, `offset=${offset}`].join('&');
        return axios.get(`${this.gifsURL}?${query}`).then(({data}) => this.convertFlickrResponse(data));
    }

    private convertFlickrResponse(flickrResponse: FlickrGalleryResponse): GalleryResponse {
        console.log('###', flickrResponse);
        return {
            images: [],
        };
    }
}
