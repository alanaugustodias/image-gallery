import {GalleryResponse} from '@app/interfaces';

export interface GalleryState {
    currentPage: number;
    isLastPage: boolean;
    galleryData: GalleryResponse;
}
