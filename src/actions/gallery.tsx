import {ADD_GALLERY_DATA, GET_CURRENT_PAGE, SET_LAST_PAGE} from '@app/constants';

import {GalleryResponse} from '@app/interfaces';

export function getNextPage() {
    return {
        type: GET_CURRENT_PAGE,
    };
}

export function addGalleryData(galleryData: GalleryResponse) {
    return {
        type: ADD_GALLERY_DATA,
        payload: galleryData,
    };
}

export function setLastPage() {
    return {
        type: SET_LAST_PAGE,
    };
}
