function truncate(str, n) {
  return str?.length ? str.substr(0, n - 1) : str;
}

export default truncate;
