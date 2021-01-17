import {GalleryAPI} from '@app/enums';
import GalleryManager from '../gallery-manager';
import config from 'react-global-configuration';

describe('Gallery Manager', () => {
    beforeEach(() => {
        jest.spyOn(config, 'get').mockImplementation(() => GalleryAPI.Mock);
    });

    it('should create the service', () => {
        const service = new GalleryManager();
        expect(service).toBeTruthy();
    });

    it('should get mock images', async () => {
        const service = new GalleryManager();
        const {images} = await service.getImages(25, 1);
        expect(images.length).toBe(25);
    });
});
