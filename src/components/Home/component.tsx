import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Home({className, ...props}: HomeProps): ReactElement {
    return <section className="home" {...props} />;
}

type HomeProps = WithChildren<HTMLAttributes<HTMLElement>>;

export default Home;
