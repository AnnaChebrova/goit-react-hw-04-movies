import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from './ApiService';

const Rewiews = () => {
  const { movieId } = useParams();
  const [rewiews, setRewiews] = useState(null);

 useEffect(() => {
 API.getReview(movieId).then(setRewiews);
}, [movieId]);

  if (rewiews && rewiews.length > 0) {
    return (
      <ul>
        {rewiews.map(rewiew => (
          <li key={rewiew.id}>
            <h3>{rewiew.author}</h3>
            <p>{rewiew.content}</p>
          </li>
        ))}
      </ul>
    );
  };
  return <p>We don't have any rewiew for this movie</p>;
};

export default Rewiews;