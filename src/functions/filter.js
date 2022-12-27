const Filter = (matchList, search) => {
  const result = matchList.filter(
    (match) => match.search.toLowerCase().includes(search.toLowerCase()),
  );
  return result;
};

export default Filter;
