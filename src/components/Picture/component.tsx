import './style.scss';

import {HTMLAttributes, ImgHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Picture({className, title, pictureWrapperProps, ...props}: PictureProps): ReactElement {
    const getCaptionOverlay = () => {
        if (!title) {
            return null;
        }
        return (
            <div className="title-overlay">
                <span>{title}</span>
            </div>
        );
    };
    return (
        <div className={`picture-wrapper ${className || ''}`} {...pictureWrapperProps}>
            {getCaptionOverlay()}
            <img {...props} />
        </div>
    );
}

type PictureProps = WithChildren<
    {title: string; pictureWrapperProps?: HTMLAttributes<HTMLDivElement>} & ImgHTMLAttributes<HTMLImageElement>
>;

export default Picture;
