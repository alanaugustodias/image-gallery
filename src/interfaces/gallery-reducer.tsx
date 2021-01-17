import {GalleryResponse} from '@app/interfaces';

export interface GalleryState {
    currentPage: number;
    isLastPage: boolean;
    isLoading: boolean;
    galleryData: GalleryResponse;
}
