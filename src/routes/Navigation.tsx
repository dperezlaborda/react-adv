import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';

const Navigation = () => {

    console.log('routes', routes);

  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {routes.map(route => (
                            <li key={route.path}>
                                <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                            </li>
                        ))}
                        {/* <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li> */}
                    </ul>
                </nav>
                <Routes>
                    {routes.map(({to, path, Component}) => (
                        <Route key={to} path={path} element={ <Component/> } />
                    ))}
                    {/* <Route path='lazy2' element={<LazyPage2/>} />
                    <Route path='lazy3' element={<LazyPage3/>} /> */}
                    <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation