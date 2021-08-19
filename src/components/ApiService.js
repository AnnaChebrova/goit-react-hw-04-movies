import axios from 'axios';

const KEY = '21945016-35782941565d1dfa523c4c56b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({searchQuery='', currentPage=1}) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

const api = {
    fetchImages
};

export default api;