import {ADD_GALLERY_DATA, GET_CURRENT_PAGE, SET_LAST_PAGE, SET_LOADING} from '@app/constants';
import {addGalleryData, getNextPage, setLastPage, setLoading} from './gallery';

describe('Gallery Actions', () => {
    it('should Get Next Page', () => {
        const result = getNextPage();
        expect(result.type).toBe(GET_CURRENT_PAGE);
    });

    it('should Get Next Page', () => {
        const result = addGalleryData({images: []});
        expect(result.type).toBe(ADD_GALLERY_DATA);
        expect(result.payload).toStrictEqual({images: []});
    });

    it('should Set Last Page', () => {
        const result = setLastPage();
        expect(result.type).toBe(SET_LAST_PAGE);
    });

    it('should Set Loading', () => {
        const result = setLoading();
        expect(result.type).toBe(SET_LOADING);
    });
});
