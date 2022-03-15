import './App.css';
import { Route, Switch } from 'react-router-dom';
import PopularContainer from './container/PopularContainer';
import NowPlayingContainer from './container/NowPlayingContainer';
import VideoPlayer from './component/VideoPlayer';
import UpComingContainer from './container/UpComingContainer';
import DetailContainer from './container/DetailContainer';
import { useSelector } from 'react-redux';
import MovieSearchContainer from './container/MovieSearchContainer';
import Person from './component/Person';
import NotFoundScene from './component/NotFoundScene';

function App() {
  const state = useSelector(state => state.movieReducer);
  return (
    <div className='App'>
      {state.videoState && <VideoPlayer />}
      <Switch>
        <Route path='/' component={PopularContainer} exact />
        <Route path='/nowplaying' component={NowPlayingContainer} />
        <Route path='/upcoming' component={UpComingContainer} />
        <Route path='/detail/:id' component={DetailContainer} />
        <Route path='/search' component={MovieSearchContainer}></Route>
        <Route path='/person/:id' component={Person}></Route>
        <Route path='*' component={NotFoundScene}></Route>
        {/* <Route render /> */}
      </Switch>
    </div>
  );
}

export default App;
