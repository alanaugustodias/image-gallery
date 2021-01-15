import {Home as HomeComponent, Picture} from '@app/components';
import {ReactElement, useEffect, useState} from 'react';

import {GalleryManager} from '@app/services';
import {GalleryResponse} from '@app/interfaces';

function Home(): ReactElement {
    let galleryManager: GalleryManager;
    const [gallery, setGallery] = useState<GalleryResponse>({
        images: [],
        pagination: {
            count: 0,
            total: 0,
            offset: 0,
        },
    });

    useEffect(() => {
        galleryManager = new GalleryManager();
        galleryManager.getImages(0, 0).then((galleryResponse) => {
            setGallery(galleryResponse);
        });
    }, []);

    const getGallery = () => (
        <div>
            {gallery.images.length &&
                gallery.images.map(({id, images}) => <Picture key={id} src={images.preview.url} />)}
            {!gallery.images.length && 'No images were found :('}
        </div>
    );

    return <HomeComponent>{getGallery()}</HomeComponent>;
}

export default Home;
