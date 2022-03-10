import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVideoHide } from '../reducers/movieReducer';
import Loading from './Loading';

function MovieSearch() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVideoHide());
  }, []);
  return (
    <div className='container-fluid px-lg-5 content'>
      <div className='search-wrap'>
        <label for='search' className='search'>
          <input
            type='text'
            className='search-input'
            placeholder='검색어를 입력하세요'
            id='search'
          ></input>
          <span className='search-text'>
            <i>Search...</i>
          </span>
        </label>
      </div>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        {/* {movies.map((movie, idx) => {
        return <MovieList movie={movie} idx={idx} key={idx} />;
      })} */}
      </div>
      {/* <div>{loading && <Loading />}</div> */}
    </div>
  );
}
export default MovieSearch;
