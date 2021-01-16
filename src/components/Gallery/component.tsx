import './style.scss';

import {GalleryResponse, PicturesContent} from '@app/interfaces';
import {HTMLAttributes, ReactElement, RefObject, useEffect, useRef, useState} from 'react';
import {Picture, PictureModal} from '@app/components';

import {GalleryActions} from '@app/actions';
import {WithChildren} from '@app/helper';
import {useDispatch} from 'react-redux';
import {useIntersectionObserver} from '@app/hooks';

function Gallery({className, galleryData, ...props}: GalleryProps): ReactElement {
    const [pictureInModal, setPictureInModal] = useState<PicturesContent>();
    const [showPictureModal, setShowPictureModal] = useState(false);

    const dispatch = useDispatch();
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const [isVisible] = useIntersectionObserver({
        elementRef: loaderRef,
        threshold: 0.5,
        rootMargin: '20px',
    });

    const handlePictureClick = (picture: PicturesContent) => {
        setPictureInModal(picture);
        setShowPictureModal(true);
    };

    const handleClosePictureModal = () => {
        setPictureInModal(undefined);
        setShowPictureModal(false);
    };

    const getPictureModal = () => (
        <PictureModal picture={pictureInModal} onClose={handleClosePictureModal} show={showPictureModal} />
    );

    const getPictures = () => {
        if (!galleryData.images.length) {
            return <div className="empty-gallery">No images were found :(</div>;
        }

        return galleryData.images.map((picture: PicturesContent, index) => (
            <Picture
                key={`${index}-${picture.id}`}
                src={picture.images.preview.url}
                title={picture.title}
                pictureWrapperProps={{onClick: () => handlePictureClick(picture)}}
            />
        ));
    };

    useEffect(() => {
        if (isVisible && galleryData.images.length) {
            dispatch(GalleryActions.getNextPage());
        }
    }, [isVisible]);

    return (
        <section {...props} className={`gallery ${className || ''}`}>
            {getPictureModal()}
            <div className="gallery-view">{getPictures()}</div>
            <div className="load-more" ref={loaderRef}>
                Load More
            </div>
        </section>
    );
}

type GalleryProps = WithChildren<{galleryData: GalleryResponse} & HTMLAttributes<HTMLDivElement>>;

export default Gallery;
