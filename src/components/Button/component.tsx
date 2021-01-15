import './style.scss';

import {ButtonHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Button({className, ...props}: ButtonProps): ReactElement {
    return <button {...props} className={`button ${className || ''}`} />;
}

type ButtonProps = WithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default Button;
