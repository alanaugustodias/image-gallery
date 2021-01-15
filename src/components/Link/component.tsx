import './style.scss';

import {AnchorHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Link({className, ...props}: LinkProps): ReactElement {
    return <a {...props} className={`link ${className || ''}`} />;
}

type LinkProps = WithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export default Link;
