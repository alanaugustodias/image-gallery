import {ADD_GALLERY_DATA, GET_CURRENT_PAGE, SET_LAST_PAGE} from '@app/constants';
import {GalleryResponse, GalleryState} from '@app/interfaces';

const initialState: GalleryState = {
    currentPage: 1,
    isLastPage: false,
    galleryData: {
        images: [],
    },
};

export default function GalleryReducer(state = initialState, action: {type: string; payload: any}): GalleryState {
    switch (action.type) {
        case ADD_GALLERY_DATA:
            const newGalleryImages: GalleryResponse | null = action.payload
                ? (action.payload as GalleryResponse)
                : null;
            return {
                ...state,
                galleryData: {
                    images: newGalleryImages
                        ? state.galleryData.images.concat(newGalleryImages.images)
                        : state.galleryData.images,
                },
            };
        case GET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case SET_LAST_PAGE:
            return {
                ...state,
                isLastPage: true,
            };
        default:
            return state;
    }
}
