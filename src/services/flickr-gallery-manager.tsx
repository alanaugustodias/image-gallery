import {DefaultGalleryManager, FlickrGalleryResponse, GalleryResponse} from '@app/interfaces';

import config from 'react-global-configuration';
import fetchJsonp from 'fetch-jsonp';

export default class FlickrGalleryManager implements DefaultGalleryManager {
    private readonly photosURL: string;
    private readonly apiKey: string;

    constructor() {
        this.photosURL = config.get('flickrPhotosURL');
        this.apiKey = config.get('apiKey');
    }

    /**
     * Get images using Flickr API
     * @param pageSize
     * @param pageNumber
     * @returns Promise<GalleryResponse>
     */
    public getImages(pageSize: number, pageNumber: number): Promise<GalleryResponse> {
        const query = [
            'method=flickr.photos.getRecent',
            `api_key=${this.apiKey}`,
            `per_page=${pageSize}`,
            'extras=url_m,url_l',
            'format=json',
            'jsoncallback=callback',
            `page=${pageNumber - 1}`,
        ].join('&');
        return new Promise((resolve) => {
            fetchJsonp(`${this.photosURL}?${query}`, {
                jsonpCallbackFunction: 'callback',
            })
                .then((response) => response.json())
                .then((response) => {
                    resolve(this.convertFlickrResponse(response));
                });
        });
    }

    /**
     * Convert the received data into GalleryResponse
     * @param param0
     * @returns GalleryResponse
     */
    private convertFlickrResponse(flickrResponse: FlickrGalleryResponse): GalleryResponse {
        return {
            images: flickrResponse.photos.photo.map((photo) => ({
                id: photo.id,
                title: photo.title,
                images: {
                    preview: {
                        url: photo.url_m,
                    },
                    original: {
                        url: photo.url_l,
                    },
                },
            })),
        };
    }
}
