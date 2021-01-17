import './style.scss';

import {GalleryResponse, PicturesContent} from '@app/interfaces';
import {HTMLAttributes, ReactElement, useEffect, useRef} from 'react';

import {GalleryActions} from '@app/actions';
import {Picture} from '@app/components';
import {useDispatch} from 'react-redux';
import {useIntersectionObserver} from '@app/hooks';

function Gallery({
    className,
    galleryData,
    isLastPage = false,
    isLoading = false,
    ...props
}: GalleryProps): ReactElement {
    const dispatch = useDispatch();
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const [isLoaderVisible] = useIntersectionObserver({
        elementRef: loaderRef,
        threshold: 0.5,
        rootMargin: '20px',
        freezeOnceVisible: isLastPage,
    });

    const getPictures = () => {
        if (!isLoading && !galleryData.images.length) {
            return null;
        }

        return galleryData.images.map((picture: PicturesContent) => (
            <Picture key={picture.id} src={picture.images.preview.url} alt={picture.title} picture={picture} />
        ));
    };

    useEffect(() => {
        if (isLoaderVisible && galleryData.images.length) {
            dispatch(GalleryActions.getNextPage());
        }
    }, [isLoaderVisible]);

    return (
        <section {...props} className={`gallery ${className || ''}`}>
            <div className="gallery-view">{getPictures()}</div>
            <div className="scroll-loader" ref={loaderRef}>
                {isLastPage ? 'No more images to show for now :(' : 'Loading images...'}
            </div>
        </section>
    );
}

type GalleryProps = {
    galleryData: GalleryResponse;
    isLastPage?: boolean;
    isLoading?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default Gallery;
