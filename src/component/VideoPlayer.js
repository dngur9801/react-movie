import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { movieApi } from '../api/axios';
import Loading from './Loading';

function VideoPlayer({ id = '823625' }) {
  const [video, setVideo] = useState();
  useEffect(() => {
    movieApi.videos(id).then(result => {
      setVideo(result.data.results[0].key);
    });
  }, []);
  if (!video) return null;
  return (
    <div className='movie-intro-wrap'>
      <ReactPlayer
        className='react-player'
        url={`https://www.youtube.com/embed/${video}`}
        width='100%'
        height='100%'
        playing={true}
        muted={true}
        controls={false}
        light={false}
        loop={true}
      />
    </div>
  );
}

export default VideoPlayer;
