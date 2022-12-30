import axios from 'axios';

/* to make requests to the movie database */
const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
});

export default instance;
