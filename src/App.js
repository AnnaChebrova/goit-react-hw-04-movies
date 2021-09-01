import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PageNav = lazy(() => import('./components/PageNav'));
const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));

export default function App () {
  return (
    <>
    <Suspense fallback={<h1>Loading.....</h1>}>
      <PageNav/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route> 
        <Route path="/movies" exact>
            <MoviesPage />
        </Route> 
        <Route path="/movies/:movieId">
        <MovieDetailsPage/>
        </Route>
      </Switch>
    </Suspense>
   </>
  );
};
