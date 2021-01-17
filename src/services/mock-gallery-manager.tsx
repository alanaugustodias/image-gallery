import {
    DefaultGalleryManager,
    GalleryResponse,
    GiphyGalleryResponse,
    GiphyPicturesContent,
    Images,
} from '@app/interfaces';

import GalleryMockData from '../assets/mock_data.json';

export default class MockGalleryManager implements DefaultGalleryManager {
    private randomIdCharacters: string;
    private galleryData: GalleryResponse;

    constructor() {
        this.randomIdCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.galleryData = this.convertMockResponse(GalleryMockData);
    }

    public getImages(pageSize: number, pageNumber: number): Promise<GalleryResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const nextImages = this.paginate(pageSize, pageNumber);
                if (!nextImages.length) {
                    resolve({images: []});
                }
                resolve({
                    images: nextImages,
                });
            }, 1000);
        });
    }

    private convertMockResponse({data}: GiphyGalleryResponse): GalleryResponse {
        let workingData: GiphyPicturesContent[] = [];
        /**
         * Intentionally increasing the size of Mock Data to test Infinite Scroll
         */
        for (let i = 0; i < 10; i++) {
            workingData = workingData.concat(data.slice(0));
        }

        return {
            images: workingData.map(({url, title, images}) => {
                const img: Images = {
                    preview: images.downsized,
                    original: images.original,
                };
                return {
                    id: this.randomId(20),
                    title,
                    images: img,
                };
            }),
        };
    }

    private paginate(pageSize: number, pageNumber: number) {
        return this.galleryData.images.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    private randomId(length: number): string {
        let result = '';
        for (let i = length; i > 0; --i) {
            result += this.randomIdCharacters[Math.floor(Math.random() * this.randomIdCharacters.length)];
        }
        return result;
    }
}
