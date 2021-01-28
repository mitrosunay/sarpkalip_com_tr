import React, { lazy, Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
 
import { PUBLIC_ROUTE } from './Route.constants';

import Loader from '../components/utilities/loader/loader';

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import('../views/homescreen')),
  },
  {
    path: PUBLIC_ROUTE.ABOUT,
    exact: true,
    component: lazy(() => import('../views/about')),
  },
  {
    path: PUBLIC_ROUTE.CONTACT,
    exact: true,
    component: lazy(() => import('../views/contact')),
  },
  {
    path: PUBLIC_ROUTE.REFERENCES,
    exact: true,
    component: lazy(() => import('../views/references')),
  },
  {
    path: PUBLIC_ROUTE.GALLERY,
    exact: true,
    component: lazy(() => import('../views/gallery/index')),
  },
  {
    path: PUBLIC_ROUTE.SERVICES,
    exact: true,
    component: lazy(() => import('../views/services')),
  },
];

 
const  Routes = ()=>{
  return (
      <Suspense fallback={<Loader />}>
        <Router  >
          <Switch>
            {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} >
                    <route.component />
                </Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
  );
}

export default Routes;