import axios from './axios';

const fetchData = async (cls, url, callback) => {
  const request = await axios.get(url);
  const result = request.data.results;
  callback(
    cls
      ? result[Math.floor(Math.random() * result.length - 1)]
      : result,
  );
  return request;
};

export default fetchData;
