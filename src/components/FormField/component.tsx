import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function FormField({className, ...props}: FormFieldProps): ReactElement {
    return <div {...props} className={`form-field ${className || ''}`} />;
}

type FormFieldProps = WithChildren<HTMLAttributes<HTMLDivElement>>;

export default FormField;
