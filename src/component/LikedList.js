import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoHide } from '../reducers/movieReducer';
import MovieList from './MovieList';
import NavBar from './NavBar';

function LikedList() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.movieReducer);
  console.log(state);
  useEffect(() => {
    dispatch(setVideoHide());
  }, []);

  return (
    <>
      <NavBar />
      <div className='container-fluid px-5 content'>
        <p className='title'>찜한영화</p>
        {state.likedMovieList.length === 0 ? (
          <div className='unliked-moive'>찜한영화가 없습니다.</div>
        ) : (
          <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
            {state.likedMovieList.map((movie, idx) => {
              return <MovieList movie={movie} idx={idx} key={idx} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default LikedList;
