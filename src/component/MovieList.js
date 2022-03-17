import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setLiked,
  setLikedMovie,
  setUnliked,
  setUnlikedMovie,
  setWatchMovie,
} from '../reducers/movieReducer';

function MovieList({ movie, idx }) {
  const state = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const addWatchMovie = e => {
    const movie = JSON.parse(e.target.dataset.id);
    dispatch(setWatchMovie(movie.id));
  };

  const onClickLike = e => {
    const likeMovie = JSON.parse(e.target.dataset.id);
    if (state.likedList.find(item => item === likeMovie.id)) {
      dispatch(setUnliked(likeMovie.id));
      dispatch(setUnlikedMovie(likeMovie));
    } else {
      dispatch(setLiked(likeMovie.id));
      dispatch(setLikedMovie(likeMovie));
    }
  };

  return (
    <div className='card-wrap mt-5 mb-5'>
      <Card>
        <Link to={`/detail/${movie.id}`}>
          {}
          <Card.Img
            variant='top'
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : '../noimg.jpeg'
            }
            title={movie.title}
            alt={movie.title}
            data-id={JSON.stringify(movie)}
            onClick={addWatchMovie}
          />
        </Link>
        <Card.Body>
          <Card.Title className='text-color subject'>
            <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
          </Card.Title>
          <div className='left-text'>
            <Card.Text className='text-color'>
              <span className='star'>★</span> {movie.vote_average}
            </Card.Text>
            <Card.Text className='text-color'>
              개봉일자 : {movie.release_date}
            </Card.Text>
          </div>
          <button
            className={`right-btn ${
              state.likedList.indexOf(movie.id) !== -1 && 'right-btn-action'
            }`}
            onClick={onClickLike}
            data-id={JSON.stringify(movie)}
          >
            ♥️
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieList;
