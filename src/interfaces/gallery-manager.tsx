import {GalleryResponse} from '@app/interfaces';

export interface DefaultGalleryManager {
    getImages(limit: number, offset?: number): Promise<GalleryResponse>;
}
