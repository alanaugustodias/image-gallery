import GalleryReducer from './gallery';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    gallery: GalleryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
