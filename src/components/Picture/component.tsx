import './style.scss';

import {ImgHTMLAttributes, ReactElement, useState} from 'react';

import {PictureModal} from '@app/components';
import {PicturesContent} from '@app/interfaces';

function Picture({className, picture, ...props}: PictureProps): ReactElement {
    const [showPictureModal, setShowPictureModal] = useState(false);

    const getCaptionOverlay = () => {
        if (!picture.title) {
            return null;
        }
        return (
            <div className="title-overlay">
                <span>{picture.title}</span>
            </div>
        );
    };

    return (
        <>
            <div className={`picture-wrapper ${className || ''}`} onClick={() => setShowPictureModal(true)}>
                {getCaptionOverlay()}
                <img {...props} />
            </div>
            <PictureModal picture={picture} onClose={() => setShowPictureModal(false)} show={showPictureModal} />
        </>
    );
}

type PictureProps = {
    picture: PicturesContent;
} & ImgHTMLAttributes<HTMLImageElement>;

export default Picture;
