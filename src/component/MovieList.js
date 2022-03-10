import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieList({ movie, idx }) {
  return (
    <div className='card-wrap mt-5 mb-5'>
      <Card>
        <Link to={`/detail/${movie.id}`}>
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
          <button className='right-btn'>찜하기</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieList;
