import {DefaultGalleryManager, GalleryResponse} from '@app/interfaces';

import FlickrGalleryManager from './flickr-gallery-manager';
import {GalleryAPI} from '@app/enums';
import GiphyGalleryManager from './giphy-gallery-manager';
import MockGalleryManager from './mock-gallery-manager';
import config from 'react-global-configuration';

export default class GalleryManager implements DefaultGalleryManager {
    private envAPI: DefaultGalleryManager;
    private readonly galleryAPI: GalleryAPI;
    private readonly galleryAPIMap: Record<string, DefaultGalleryManager>;

    constructor() {
        this.galleryAPI = config.get('galleryApi');
        this.galleryAPIMap = {
            [GalleryAPI.Giphy]: new GiphyGalleryManager(),
            [GalleryAPI.Flickr]: new FlickrGalleryManager(),
            [GalleryAPI.Mock]: new MockGalleryManager(),
        };
        this.envAPI = this.galleryAPIMap[this.galleryAPI];
    }

    public getImages(pageSize: number, pageNumber: number): Promise<GalleryResponse> {
        return this.envAPI.getImages(pageSize, pageNumber);
    }
}
