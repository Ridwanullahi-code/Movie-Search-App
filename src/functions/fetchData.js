const getData = (file, callback) => {
  fetch(file, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
};

export const Fetch = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee341a7b55msh81bd6fcb70a206bp132128jsn077024b1aef2',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };
  const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options);
  const data = await response.json();
  return data;
};

export default getData;
