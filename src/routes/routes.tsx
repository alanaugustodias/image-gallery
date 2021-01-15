import {Home} from '@app/containers';
import {ReactElement} from 'react';
import {Route} from 'react-router';

const AppRoutes: ReactElement[] = [<Route exact key="home" path="/" component={Home} />];

export default AppRoutes;
