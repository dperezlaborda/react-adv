// import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: () => JSX.Element;
    name: string;
    children?: Route[];
}

//componente cargado bajo demanda
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPage3'));

export const routes:Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'Lazy 1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'Lazy 2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'Lazy 3'
    }
]