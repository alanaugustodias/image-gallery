import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Row({className, ...props}: RowProps): ReactElement {
    return <div {...props} className={`row ${className || ''}`} />;
}

type RowProps = WithChildren<HTMLAttributes<HTMLDivElement>>;

export default Row;
