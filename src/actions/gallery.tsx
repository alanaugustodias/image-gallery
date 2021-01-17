import {ADD_GALLERY_DATA, GET_CURRENT_PAGE, SET_LAST_PAGE, SET_LOADING} from '@app/constants';

import {GalleryResponse} from '@app/interfaces';

/**
 * Get the Next Gallery Content Page
 */
export function getNextPage() {
    return {
        type: GET_CURRENT_PAGE,
    };
}

/**
 * Add Gallery Data
 * @param galleryData
 */
export function addGalleryData(galleryData: GalleryResponse) {
    return {
        type: ADD_GALLERY_DATA,
        payload: galleryData,
    };
}

/**
 * Set Gallery to Last Page
 */
export function setLastPage() {
    return {
        type: SET_LAST_PAGE,
    };
}

/**
 * Set Gallery to Loading
 */
export function setLoading() {
    return {
        type: SET_LOADING,
    };
}
