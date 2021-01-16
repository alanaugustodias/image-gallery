import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {Gallery} from '@app/components';
import {GalleryResponse} from '@app/interfaces';
import {WithChildren} from '@app/helper';

function Home({className, galleryData, ...props}: HomeProps): ReactElement {
    return (
        <section className="home" {...props}>
            <Gallery galleryData={galleryData} />
        </section>
    );
}

type HomeProps = WithChildren<{galleryData: GalleryResponse} & HTMLAttributes<HTMLElement>>;

export default Home;
