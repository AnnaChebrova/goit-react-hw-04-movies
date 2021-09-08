import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import API from './ApiService';
import Cast from './Cast';
import Rewiews from './Rewiew';

import styles from './styles.module.css';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  
  useEffect(() => {
  API.getMovieInfo(movieId).then(movieInfo => setMovie(movieInfo));
  }, [movieId]); 

  const BtnBack = () => {
    history.push(location.state.from);
  };

  return (
    <div>
      <button onClick={BtnBack} className={styles.btnBack}>
        Go Back
      </button>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <p>{movie.genres.map(genre => `${genre.name}`)}</p>
          </div>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>

          <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>

          <li>
          <NavLink
              to={{
                pathname: `${url}/rewiews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>          </li>
        </ul>

        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/rewiews`}>
          <Rewiews />
        </Route>
      </div>
    </div>
  );
}
