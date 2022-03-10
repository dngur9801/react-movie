import { useState } from 'react';
import { useEffect } from 'react';

const clickScrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
function ScrollTop() {
  let [hide, setHide] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.document.documentElement.scrollTop;
      scrollTop > 1600 ? setHide(true) : setHide(false);
    });
  });
  return (
    <div
      onClick={clickScrollTop}
      className={`scroll-btn ${hide ? 'scroll-btn' : 'scroll-btn-hide'}`}
    >
      ▲
    </div>
  );
}
export default ScrollTop;
