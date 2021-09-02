import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from './ApiService';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
  API.getCast(movieId).then(setCast);
}, [movieId]);
    
  return (
      <ul>
      {cast &&
        cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p>{actor.name}</p>
            <p>Character:</p>
            <p>{actor.character}</p>
          </li>
        ))};
    </ul>
  );
}
