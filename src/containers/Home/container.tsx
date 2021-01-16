import {ReactElement, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GalleryActions} from '@app/actions';
import {GalleryManager} from '@app/services';
import {Home as HomeComponent} from '@app/components';

function Home(): ReactElement {
    let galleryManager: GalleryManager;
    const {currentPage, galleryData} = useSelector((state) => state.gallery);
    const dispath = useDispatch();

    useEffect(() => {
        if (!galleryManager) {
            galleryManager = new GalleryManager();
        }

        galleryManager.getImages(25, currentPage).then((galleryResponse) => {
            dispath(GalleryActions.addGalleryData(galleryResponse));
        });
    }, [currentPage]);

    return <HomeComponent galleryData={galleryData} />;
}

export default Home;
