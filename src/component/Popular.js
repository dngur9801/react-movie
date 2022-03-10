import { movieApi } from '../api/axios';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { setVideoShow } from '../reducers/movieReducer';

function Popular() {
  let dispatch = useDispatch();
  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);

  function previewScroll() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const nowView = scrollHeight - clientHeight;
    if (scrollTop === nowView) {
      setPage(prevPage => prevPage + 1);
      window.removeEventListener('scroll', previewScroll);
    }
  }
  useEffect(() => {
    dispatch(setVideoShow());
    setLoading(true);
    movieApi.popular(page).then(result => {
      setLoading(false);
      setMovies(prevMovies => {
        return [...new Set([...prevMovies, ...result.data.results])];
      });
    });
    window.addEventListener('scroll', previewScroll);
  }, [page]);
  return (
    <div className='container-fluid px-lg-5 content'>
      <p className='title'>인기 영화</p>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        {movies.map((movie, idx) => {
          return <MovieList movie={movie} idx={idx} key={idx} />;
        })}
      </div>
      <div>{loading && <Loading />}</div>
    </div>
  );
}

export default Popular;
