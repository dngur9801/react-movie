import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieApi } from '../api/axios';
import { setVideoShow } from '../reducers/movieReducer';
import Loading from './Loading';
import MovieList from './MovieList';

function NowPlaying() {
  const dispatch = useDispatch();
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(setVideoShow());
    movieApi.nowPlaying().then(result => {
      setMovies(result.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <div className='container-fluid px-lg-5 content'>
      <p className='title'>현재 상영영화</p>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        {movies.map((movie, idx) => {
          return <MovieList movie={movie} idx={idx} key={idx} />;
        })}
      </div>
      <div>{loading && <Loading />}</div>
    </div>
  );
}

export default NowPlaying;
