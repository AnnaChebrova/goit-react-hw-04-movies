import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import PageNav from "./components/PageNav";

const HomePage = lazy(() => import('./components/HomePage.js'));
const MoviesPage = lazy(() => import('./components/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage.js'));


function App() {
  return (
    <div>
      <PageNav />
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;