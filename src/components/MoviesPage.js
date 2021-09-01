import React, { Suspense, lazy } from 'react';
import { NavLink, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import qs from 'query-string';
import API from './ApiService';

const BtnBack = lazy(() => import('../components/BtnBack'));

const MoviesPage = () => {
    const {url} = useRouteMatch();
    const {search} = useLocation();
    const location = useLocation();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState(qs.parse(search)?.query ?? "");
    const [movies, setMovies] = useState([]);

    const handelChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    useEffect(() => {
        if (searchQuery === "") {
            return;
        };
        if (searchQuery) {
            API.MovieSearch(searchQuery).then((MoveiInfo) => setMovies(MoveiInfo));
            setSearchQuery('');
        }}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        API.MovieSearch(searchQuery).then((MoveiInfo) => setMovies(MoveiInfo));
        history.push({
      ...location,
       search: `query=${searchQuery}`,
    });
        setSearchQuery('');
    };

    return (
        <>
            <Suspense fallback={<h1>Loading.....</h1>}>
            <BtnBack />
            </Suspense>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={handelChange}
                />
            <button type="submit">
            </button>
            </form>
            <ul>
                {movies && movies.map(movie => {
                    return (<li key={movie.id}>
                        <NavLink
                            to={{
                            pathname: `${url}/${movie.id}`,
                            state: {
                            from: location},
                            }}>
                            {movie.title}
                        </NavLink>
                    </li>)
                })}
            </ul>
        </>    
    );
};

export default MoviesPage;