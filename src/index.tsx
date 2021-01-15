import './configs/global-configs';
import './styles/index.scss';

import {Provider} from 'react-redux';
import {Router} from '@app/routes';
import {configureStore} from '@app/helper';
import {render} from 'react-dom';

const store = configureStore();

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('content'),
);
