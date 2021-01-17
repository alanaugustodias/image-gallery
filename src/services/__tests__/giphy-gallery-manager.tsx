import GiphyGalleryManager from '../giphy-gallery-manager';
import {GiphyGalleryResponse} from '@app/interfaces';
import axios from 'axios';
import config from 'react-global-configuration';

describe('Giphy Gallery Manager', () => {
    beforeEach(() => {
        jest.spyOn(config, 'get').mockImplementation(() => '');
        const giphyResponseData: GiphyGalleryResponse = {
            data: [
                {
                    id: '123',
                    images: {
                        original: {url: 'original-url'},
                        downsized: {url: 'preview-url'},
                    },
                    title: 'Image Title',
                },
            ],
        };
        jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({data: giphyResponseData}));
    });

    it('should create the service', () => {
        const service = new GiphyGalleryManager();
        expect(service).toBeTruthy();
    });

    it('should get Giphy images', async () => {
        const service = new GiphyGalleryManager();
        const {images} = await service.getImages(10, 1);
        expect(images.length).toBe(1);
    });
});
