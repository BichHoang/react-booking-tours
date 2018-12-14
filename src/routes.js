import React from 'react';
import NotFound from './pages/NotFound/NotFound';
import TourDetail from "./components/TourDetail/TourDetail";
import Tours from './components/Tours/Tours';
import Content from './components/Content/Content';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({ match}) => <Content match={match} />
    },
    {
        path: '/tours',
        exact: true,
        main: ({ match}) => <Tours match={match} />
    },
    {
        path: '/tours/:id',
        exact: false,
        main: ({ match}) => <TourDetail match={match} />
    },
    {

        path: '/signup',
        exact: true,
        main: ({match}) => <SignUp match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: ({match}) => <Login match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;