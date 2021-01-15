import {ReactElement, Suspense} from 'react';

import {App} from '@app/components';
import {AppRoutes} from '@app/routes';
import {ConnectedRouter} from 'connected-react-router';
import {Switch} from 'react-router';
import {history} from '@app/helper';

function Router(): ReactElement {
    return (
        <Suspense fallback="loading">
            <App>
                <ConnectedRouter history={history}>
                    <Switch>{AppRoutes}</Switch>
                </ConnectedRouter>
            </App>
        </Suspense>
    );
}

export default Router;
