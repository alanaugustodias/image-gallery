import MockGalleryManager from '../mock-gallery-manager';

describe('Mock Gallery Manager', () => {
    it('should create the service', () => {
        const service = new MockGalleryManager();
        expect(service).toBeTruthy();
    });

    it('should get mock images', async () => {
        const service = new MockGalleryManager();
        const {images} = await service.getImages(25, 1);
        expect(images.length).toBe(25);
    });

    it('should get the last page plus one and receive no more images', async () => {
        const service = new MockGalleryManager();
        const {images} = await service.getImages(25, 11);
        expect(images.length).toBe(0);
    });
});
