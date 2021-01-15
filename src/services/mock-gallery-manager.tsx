import {DefaultGalleryManager, GalleryResponse, GiphyGalleryResponse, Images} from '@app/interfaces';

import GalleryMockData from '../assets/mock_data.json';

export default class MockGalleryManager implements DefaultGalleryManager {
    public getImages(limit: number, offset?: number): Promise<GalleryResponse> {
        return Promise.resolve(this.convertMockResponse(GalleryMockData));
    }

    private convertMockResponse({data, pagination}: GiphyGalleryResponse): GalleryResponse {
        return {
            images: data.map(({id, url, images}) => {
                const img: Images = {
                    preview: images.downsized,
                    original: images.original,
                };
                return {
                    id,
                    url,
                    images: img,
                };
            }),
            pagination: {
                total: pagination.total_count,
                count: pagination.count,
                offset: pagination.offset,
            },
        };
    }
}
