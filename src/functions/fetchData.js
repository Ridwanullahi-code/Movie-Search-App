const searchList = async () => {
  const res = await fetch('../data/search.json');
  const search = await res.json();
  console.log(search);
};

export default searchList;
