function nav() {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav_items');

  hamburger.addEventListener('click', () => {
    navItems.classList.toggle('show');
  });

  const glassLens = document.querySelector('.glass_lens');
  const searchOption = document.querySelector('.search_option');
  const arrowLeft = document.querySelector('.fa-arrow-left');

  glassLens.addEventListener('click', () => {
    searchOption.classList.add('show');
    glassLens.classList.add('hide');
    arrowLeft.classList.add('show');
    hamburger.classList.add('hide');
  });

  arrowLeft.addEventListener('click', () => {
    searchOption.classList.remove('show');
    arrowLeft.classList.remove('show');
    glassLens.classList.remove('hide');
    hamburger.classList.toggle('hide');
  });

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.scrollY > 100 ? handleShow(true) : handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener('scroll', handleShow);
  //   };
  // }, []);
}
export default nav;
