// action type
const VIDEO_SHOW = 'VIDEO_SHOW';
const VIDEO_HIDE = 'VIDEO_HIDE';
const SET_LIKED = 'SET_LIKED';
const SET_UNLIKED = 'SET_UNLIKED';
const SET_LIKED_MOVIE = 'SET_LIKED_MOVIE';
const SET_UNLIKED_MOVIE = 'SET_UNLIKED_MOVIE';
const SET_WATCH_MOVIE = 'SET_WATCH_MOVIE';

// action method
export const setVideoShow = () => ({ type: VIDEO_SHOW });
export const setVideoHide = () => ({ type: VIDEO_HIDE });
export const setLiked = id => ({ type: SET_LIKED, id });
export const setUnliked = id => ({ type: SET_UNLIKED, id });
export const setLikedMovie = id => ({ type: SET_LIKED_MOVIE, id });
export const setUnlikedMovie = id => ({ type: SET_UNLIKED_MOVIE, id });
export const setWatchMovie = id => ({ type: SET_WATCH_MOVIE, id });

const initialState = {
  videoState: '',
  likedMovieList: [],
  likedList: [],
  watchMovieList: [],
};

// reducer
export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_SHOW:
      return {
        ...state,
        videoState: true,
      };
    case VIDEO_HIDE:
      return {
        ...state,
        videoState: false,
      };
    case SET_LIKED_MOVIE:
      return {
        ...state,
        likedMovieList: [...new Set([...state.likedMovieList, action.id])],
      };
    case SET_UNLIKED_MOVIE:
      return {
        ...state,
        likedMovieList: [
          ...state.likedMovieList.filter(item => item.id !== action.id.id),
        ],
      };
    case SET_LIKED:
      return {
        ...state,
        likedList: [...new Set([...state.likedList, action.id])],
      };
    case SET_UNLIKED:
      return {
        ...state,
        likedList: [...state.likedList.filter(item => item !== action.id)],
      };
    case SET_WATCH_MOVIE:
      return {
        ...state,
        watchMovieList: [...new Set([...state.watchMovieList, action.id])],
      };
    default:
      return state;
  }
}
