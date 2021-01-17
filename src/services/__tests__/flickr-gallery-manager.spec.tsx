const flickrResponseData: FlickrGalleryResponse = {
    photos: {
        photo: [
            {
                id: '123',
                title: 'Image Title',
                url_m: 'URL M',
                url_l: 'URL L',
            },
        ],
    },
};
jest.mock('fetch-jsonp', () => () => Promise.resolve({json: () => Promise.resolve(flickrResponseData)}));

import FlickrGalleryManager from '../flickr-gallery-manager';
import {FlickrGalleryResponse} from '@app/interfaces';
import config from 'react-global-configuration';

describe('Flickr Gallery Manager', () => {
    beforeEach(() => {
        jest.spyOn(config, 'get').mockImplementation(() => '');
    });

    it('should create the service', () => {
        const service = new FlickrGalleryManager();
        expect(service).toBeTruthy();
    });

    it('should get Flickr images', async () => {
        const service = new FlickrGalleryManager();
        const {images} = await service.getImages(10, 1);
        expect(images.length).toBe(1);
    });
});
