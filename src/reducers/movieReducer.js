// action type
const VIDEO_SHOW = 'VIDEO_SHOW';
const VIDEO_HIDE = 'VIDEO_HIDE';

// action method
export const setVideoShow = () => ({ type: VIDEO_SHOW });
export const setVideoHide = () => ({ type: VIDEO_HIDE });

const initialState = {
  videoState: '',
  number: '123',
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
    default:
      return state;
  }
}
