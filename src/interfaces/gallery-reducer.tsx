import {GalleryResponse} from '@app/interfaces';

export interface GalleryState {
    currentPage: number;
    galleryData: GalleryResponse;
}
