import { lazy } from 'react';

const mainRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() => import('../pages/HomePages'/* webpackChunkName: "HomePage"*/))
    },
    {
        path: '/movies/:moviesId',
        name: 'Movies Details',
        exact: false,
        component: lazy(() => import('../pages/MovieDetailsPage'/* webpackChunkName: "MovieDetailsPage"*/))
    },
    {
        path: '/movies',
        name: 'Movies',
        exact: false,
       component: lazy(() => import('../pages/MoviesPage/MoviesPage'/* webpackChunkName: "MoviesPage"*/))
    },
];

export default mainRoutes;