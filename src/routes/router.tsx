import {ReactElement, Suspense} from 'react';

import {AppRoutes} from '@app/routes';
import {ConnectedRouter} from 'connected-react-router';
import {Switch} from 'react-router';
import {history} from '@app/helper';

function Router(): ReactElement {
    return (
        <Suspense fallback="loading">
            <ConnectedRouter history={history}>
                <Switch>{AppRoutes}</Switch>
            </ConnectedRouter>
        </Suspense>
    );
}

export default Router;
