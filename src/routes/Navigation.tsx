import { Route, NavLink, Redirect, Switch, Router } from 'react-router-dom';
import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';
import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

const Navigation = () => {

  return (
    <Router>
           <div className="main-layout">
            <nav>
                <img src={logo} alt="React logo" />
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <NavLink to={route.path} className={({ isActive }) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} render={() => <Component />} />
                ))}
                <Redirect to={routes[0].path} />
            </Switch>
        </div>
    </Router>
  )
}

export default Navigation