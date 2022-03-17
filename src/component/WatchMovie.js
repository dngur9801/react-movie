import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieApi } from '../api/axios';
import { setVideoHide } from '../reducers/movieReducer';
import MovieList from './MovieList';
import NavBar from './NavBar';

function WacthMovie() {
  const state = useSelector(state => state.movieReducer);
  const watchMovieList = state.watchMovieList;
  const dispatch = useDispatch();

  const [watchResult, setWatchResult] = useState([]);

  useEffect(() => {
    dispatch(setVideoHide());
    watchMovieList.map(item => {
      movieApi.details(item).then(result => {
        setWatchResult(prev => [...prev, result.data]);
      });
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className='container-fluid px-lg-5 content'>
        <p className='title'>최근본영화</p>
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
          {watchResult.map((movie, idx) => {
            return <MovieList movie={movie} idx={idx} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
}
export default WacthMovie;
