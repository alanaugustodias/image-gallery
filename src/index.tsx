import './configs/global-configs';
import './styles/index.scss';

import {Home} from '@app/containers';
import {Provider} from 'react-redux';
import {RootReducer} from '@app/reducers';
import {Suspense} from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';

const store = createStore(RootReducer);

render(
    <Provider store={store}>
        <Suspense fallback="loading">
            <Home />
        </Suspense>
    </Provider>,
    document.getElementById('content'),
);
