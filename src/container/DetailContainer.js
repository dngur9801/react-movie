import { useParams } from 'react-router';
import Detail from '../component/Detail';
import NavBar from '../component/NavBar';
import VideoPlayer from '../component/VideoPlayer';

function DetailContainer() {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <VideoPlayer id={id} />
      <Detail id={id} />
    </>
  );
}
export default DetailContainer;
