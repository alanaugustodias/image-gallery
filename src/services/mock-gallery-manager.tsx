import {
    DefaultGalleryManager,
    GalleryResponse,
    GiphyGalleryResponse,
    GiphyPicturesContent,
    Images,
} from '@app/interfaces';

import GalleryMockData from '../assets/mock_data.json';

export default class MockGalleryManager implements DefaultGalleryManager {
    private galleryData: GalleryResponse;

    constructor() {
        this.galleryData = this.convertMockResponse(GalleryMockData);
    }

    public getImages(limit: number, offset: number): Promise<GalleryResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    images: this.paginate(limit, offset),
                });
            }, 1000);
        });
    }

    private convertMockResponse({data}: GiphyGalleryResponse): GalleryResponse {
        let workingData: GiphyPicturesContent[] = [];
        /**
         * Intentionally increasing the size of Mock Data to test Infinite Scroll
         */
        for (let i = 0; i < 1000; i++) {
            workingData = workingData.concat(data.slice(0));
        }

        return {
            images: workingData.map(({id, url, title, images}) => {
                const img: Images = {
                    preview: images.downsized,
                    original: images.original,
                };
                return {
                    id,
                    url,
                    title,
                    images: img,
                };
            }),
        };
    }

    private paginate(pageSize: number, pageNumber: number) {
        return this.galleryData.images.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
}
