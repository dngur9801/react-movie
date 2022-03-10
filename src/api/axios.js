import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b27db429981307f4f3823a8daed2c7c9',
    language: 'ko-KR',
    region: 'KR',
  },
});

export const movieApi = {
  nowPlaying: () => request.get('movie/now_playing'),
  popular: page => request.get(`movie/popular?page=${page}`),
  upComing: () => request.get('movie/upcoming'),
  videos: id => request.get(`movie/${id}/videos`),
  details: id => request.get(`movie/${id}`),
  credits: id => request.get(`movie/${id}/credits`),
  similar: id => request.get(`movie/${id}/similar`),
  recommendations: id => request.get(`movie/${id}/recommendations`),

  search: keyword =>
    request.get('search/movie', {
      params: {
        query: keyword,
      },
    }),
};
