import {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Gallery} from '@app/components';
import {GalleryActions} from '@app/actions';
import {GalleryManager} from '@app/services';
import {RootState} from '@app/reducers';

function Home(): ReactElement {
    let galleryManager: GalleryManager;
    const {currentPage, isLastPage, galleryData} = useSelector((state: RootState) => state.gallery);
    const dispath = useDispatch();

    useEffect(() => {
        if (!galleryManager) {
            galleryManager = new GalleryManager();
        }

        galleryManager.getImages(25, currentPage).then((galleryResponse) => {
            if (!galleryResponse.images.length) {
                dispath(GalleryActions.setLastPage());
            } else {
                dispath(GalleryActions.addGalleryData(galleryResponse));
            }
        });
    }, [currentPage]);

    return <Gallery galleryData={galleryData} isLastPage={isLastPage} />;
}

export default Home;
