import {GalleryResponse} from '@app/interfaces';

export interface DefaultGalleryManager {
    getImages(pageSize: number, pageNumber: number): Promise<GalleryResponse>;
}
