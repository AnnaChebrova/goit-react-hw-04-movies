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
    history.push(location?.state?.from ?? '/');
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
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/rewiews`}>Rewiews</NavLink>
          </li>
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






// import React, { Suspense, lazy } from 'react';
// import { useState, useEffect } from 'react';
// import { useParams, Route, useRouteMatch } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import API from './ApiService';

// import styles from './styles.module.css';

// import Cast from './Cast';
// // const Cast = lazy(() => import('../components/Cast.js'));
// const Rewiews = lazy(() => import('../components/Rewiew'));
// const BtnBack = lazy(() => import('../components/BtnBack'));

// export default function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState([]);
//   const { url, path } = useRouteMatch();  
//   const history = useHistory();

//   useEffect(() => {
//         API.getMovieInfo(movieId).then(movieInfo => setMovie(movieInfo));
//     }, [movieId]); 

//   return (
//     <>
//       <Suspense fallback={<h1>Loading.....</h1>}>
//       <BtnBack  />
//       </Suspense>
//       {movie && (
//         <>
//         <div className={styles.wraper}>
//           <img className={styles.pic}
//             src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <div className={styles.textDetals}>
//             <h1>{movie.title}</h1>
//             <p>User Score: {movie.vote_average * 10}%</p>
//             <h2>Overview</h2>
//             <p>{movie.overview}</p>
//             <h2>Genres</h2>
//             <p>{movie.genres && movie.genres.map(genre => `${genre.name}`)}</p>
//           </div>
//         </div>
//             <div className={styles.cast}>
//               <h3>Additional information</h3>
//               <ul>
//                 <li>

//                 <NavLink to={`${url}/cast`}>Cast</NavLink>



//                 {/* <NavLink to={{
//                     pathname: `${url}/cast`,
//                     state: {from: history.location.state.from}}}>Cast</NavLink> */}
//                 </li>
//                 <li>
//                   <NavLink to={{
//                     pathname: `${url}/rewiews`,
//                     state: {from: history.location.state.from}}}>Rewiews</NavLink>
//                 </li>
//             </ul>
//             <Suspense fallback={<h1>Loading.....</h1>}>
//               <Route path={`${path}/cast`}>
//                 <Cast />
//               </Route>
//               <Route path={`${path}/rewiews`}>
//                 <Rewiews />
//             </Route>
//             </Suspense>
//             </div>
//           </>
//       )};
//     </>
//   );
// };