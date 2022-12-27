const searchList = async (searchText) => {
  const res = await fetch("../data/search.json");
  const search = await res.json();
  return search;
};

export default searchList;
