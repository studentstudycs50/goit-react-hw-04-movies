import { lazy } from "react";

const movieDetailsRoutes = [
    {
        path: '/cast',
        name: 'Cast',
        exact: true,
        component: lazy (()=> import('../component/Cast/Cast'/* webpackChunkName: "MovieCast"*/))
    },
    {
        path: '/reviews',
        name: 'Reviews',
        exact: true,
        component: lazy (()=> import('../component/Reviews/Reviews'/* webpackChunkName: "Reviews"*/))
    },
]

export {movieDetailsRoutes};