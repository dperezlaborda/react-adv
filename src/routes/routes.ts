// import { lazy, LazyExoticComponent } from 'react';
import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';
import { NoLazy } from '../lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

//componente cargado bajo demanda
// const LazyPage1 = 


export const routes:Route[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]