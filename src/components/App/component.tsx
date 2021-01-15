import './style.scss';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function App({className, ...props}: AppProps): ReactElement {
    return <section {...props} className={`app ${className || ''}`} />;
}

type AppProps = WithChildren<HTMLAttributes<HTMLElement>>;

export default App;
