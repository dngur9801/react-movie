import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { movieApi } from '../api/axios';
import { setVideoHide } from '../reducers/movieReducer';
import Loading from './Loading';
import MovieList from './MovieList';

function MovieSearch() {
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState();
  const [answer, setAnswer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(setVideoHide());

    movieApi.search(keyword).then(result => {
      setLoading(false);
      setAnswer(result.data.results);
    });
  }, [keyword]);
  return (
    <div className='container-fluid px-lg-5 content'>
      <div className='search-wrap'>
        <label className='search'>
          <input
            type='text'
            className='search-input'
            placeholder='검색어를 입력하세요'
            id='search'
            onInput={event => {
              setKeyword(event.target.value);
            }}
          ></input>
          {loading && (
            <span className='search-text'>
              <i>Search...</i>
            </span>
          )}
        </label>
      </div>
      <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        {answer &&
          answer.map((movie, idx) => {
            return <MovieList movie={movie} idx={idx} key={idx} />;
          })}
      </div>
    </div>
  );
}
export default MovieSearch;
