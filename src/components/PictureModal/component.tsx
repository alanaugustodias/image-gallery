import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {PicturesContent} from '@app/interfaces';

function PictureModal({className, onClose, picture, show, ...props}: PictureModalProps): ReactElement {
    const handleModalClick = ({target}: {target: EventTarget}) => {
        if (target instanceof Element) {
            const allowedCloseTargets = 'picture-modal';
            if (target && target.className.indexOf(allowedCloseTargets) >= 0) {
                onClose();
            }
        }
    };

    const getImageContent = () =>
        picture && show ? (
            <figure>
                <img src={picture.images.original.url} alt={picture.title} />
                <label>{picture.title}</label>
            </figure>
        ) : (
            <span>No image to show :(</span>
        );

    return (
        <div className={`picture-modal ${show ? 'show' : ''} ${className || ''}`} {...props} onClick={handleModalClick}>
            <span className="close" onClick={() => onClose()}>
                &times;
            </span>
            <div className="modal-content">{getImageContent()}</div>
        </div>
    );
}

type PictureModalProps = {
    picture?: PicturesContent;
    show: boolean;
    onClose: Function;
} & HTMLAttributes<HTMLElement>;

export default PictureModal;
