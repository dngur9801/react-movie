import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setVideoHide } from '../reducers/movieReducer';

function NotFoundScene() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVideoHide());
  }, []);
  return (
    <div className='notfound-wrap'>
      <Card className='notfound'>
        <Card.Body>
          <Card.Title>404 Not Found</Card.Title>
          <Card.Text>존재하지 않는 페이지 입니다.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>
            <Link to='/'>◀︎ HOME</Link>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default NotFoundScene;
