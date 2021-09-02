import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './styles.module.css'

import API from './ApiService';

const HomePage = () => {
const [topMovies, setTopMovies] = useState([]);
const location = useLocation();

useEffect(() => {
    API.getMovie().then((topMovies) => {
        setTopMovies(topMovies);
    });
  }, []);

    return (
    <>
    <h1 className={styles.sectionTitle}>Trending today</h1>
    <ul >
        {topMovies.map(e => {
            return (<li className={styles.movieName} key={e.id}>
                <NavLink to={{
                pathname: `/movies/${e.id}}`,
                state: { from: location },
                }} > {e.title} </NavLink>
                </li>)
            })
            }
            </ul>
        </>    
    )
};

export default HomePage;