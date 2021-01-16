import GalleryReducer from './gallery';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        gallery: GalleryReducer,
    });

export default rootReducer;
