import Flickr from './Flickr';
import {GalleryAPI} from '@app/enums';
import Giphy from './Giphy';
import Mock from './Mock';

const EnvConfigs: Record<string, any> = {
    [GalleryAPI.Flickr]: Flickr,
    [GalleryAPI.Giphy]: Giphy,
    [GalleryAPI.Mock]: Mock,
};

export default EnvConfigs;
