import './style.scss';

import {ImgHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Picture({className, ...props}: PictureProps): ReactElement {
    return <img {...props} className={`picture ${className || ''}`} />;
}

type PictureProps = WithChildren<ImgHTMLAttributes<HTMLImageElement>>;

export default Picture;
