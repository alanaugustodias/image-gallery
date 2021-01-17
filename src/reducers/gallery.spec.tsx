import {ADD_GALLERY_DATA} from '@app/constants';
import {GalleryActions} from '@app/actions';
import GalleryReducer from './gallery';
import {GalleryState} from '@app/interfaces';

describe('Gallery Reducer', () => {
    const initialState: GalleryState = {
        currentPage: 1,
        isLastPage: false,
        isLoading: false,
        galleryData: {
            images: [],
        },
    };

    const picture = {
        id: '123',
        title: 'Image Title',
        images: {
            preview: {
                height: '100',
                width: '100',
                url: 'image-src',
            },
            original: {
                height: '100',
                width: '100',
                url: 'image-src',
            },
        },
    };

    it('should Get Next Page', () => {
        const state = GalleryReducer(initialState, GalleryActions.getNextPage());
        expect(state.currentPage).toBe(initialState.currentPage + 1);
    });

    it('should Add Gallery Data', () => {
        let state = GalleryReducer(initialState, GalleryActions.setLoading());
        expect(state.isLoading).toBeTruthy();
        state = GalleryReducer(initialState, GalleryActions.addGalleryData({images: [picture]}));
        expect(state.galleryData.images.length).toBe(1);
        expect(state.galleryData.images[0]).toStrictEqual(picture);
        expect(state.currentPage).toBe(initialState.currentPage);
        expect(state.isLastPage).toBe(initialState.isLastPage);
        expect(state.isLoading).toBeFalsy();
    });

    it('should Add Gallery Data without payload', () => {
        const state = GalleryReducer(initialState, {type: ADD_GALLERY_DATA});
        expect(state.galleryData.images.length).toBe(0);
    });

    it('should Add Gallery Data without Pictures', () => {
        const state = GalleryReducer(initialState, GalleryActions.addGalleryData({images: []}));
        expect(state.galleryData.images.length).toBe(0);
    });

    it('should Set Last Page', () => {
        const state = GalleryReducer(initialState, GalleryActions.setLastPage());
        expect(state.isLastPage).toBeTruthy();
    });

    it('should pass a non-handled action', () => {
        const state = GalleryReducer(initialState, {type: 'NON_HANDLED_ACTION'});
        expect(state).toStrictEqual(initialState);
    });
});
