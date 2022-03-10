import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { movieApi } from '../api/axios';
import { setVideoHide } from '../reducers/movieReducer';
import styled from 'styled-components';
import Loading from './Loading';
import MovieList from './MovieList';

function Detail({ id }) {
  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(setVideoHide());

    movieApi
      .details(id)
      .then(result => {
        return result.data;
      })
      .then(data => setDetail(data));

    movieApi
      .credits(id)
      .then(result => {
        return result.data;
      })
      .then(data => {
        setCredits(data.cast.slice(0, 20));
      });

    movieApi
      .similar(id)
      .then(result => {
        return result.data;
      })
      .then(data => {
        setSimilar(data.results.slice(0, 10));
      });

    movieApi
      .recommendations(id)
      .then(result => {
        return result.data;
      })
      .then(data => {
        setRecommendations(data.results);
        console.log(data.results.slice(0, 10));
      });

    setLoading(false);
  }, []);

  const BackImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(https://image.tmdb.org/t/p/w500${detail.backdrop_path});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(7px);
    opacity: 0.5;
    top: 0;
    left: 0;
  `;

  if (loading) return <div>{loading && <Loading />}</div>;
  if (!detail) return null;

  return (
    <>
      <div className='container-fluid px-5 content detail-wrap'>
        <BackImg></BackImg>
        <div className='card-wrap mt-5 mb-5'>
          <div className='row row-cols-1 row-cols-md-3'>
            <Card className='nobackground'>
              <Card.Img
                variant='top'
                src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              />
            </Card>
            <Card className='right-text-wrap nobackground'>
              <Card.Body className='detail-texts'>
                <div>
                  <h1 className='detail-kr-title display-5'>{detail.title}</h1>
                  <h6 className='detail-en-title display-6'>
                    {detail.original_title}
                  </h6>
                </div>
                <div>
                  <span className='star'>★</span>
                  <span>{detail.vote_average}</span>
                  <span className='px-4'>{detail.runtime} 분</span>
                </div>
                <div className='mt-5 mb-2 subtitle'>영화 줄거리</div>
                <div>{detail.overview}</div>
                <div className='mt-5 mb-2 subtitle'>태그라인</div>
                <div>{detail.tagline}</div>
                <div className='mt-5 mb-2 subtitle'>장르</div>
                <div>
                  {detail.genres &&
                    detail.genres.map((item, idx) => (
                      <span className='pr-4' key={idx}>
                        # {item.name}
                      </span>
                    ))}
                </div>
                <div className='mt-5 mb-2 subtitle'>개봉날짜 / 제조국</div>
                <div>
                  <span className='pr-4'>{detail.release_date}</span>
                  <span>
                    {detail.production_countries &&
                      detail.production_countries
                        .map(item => item.name)
                        .join(' / ')}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 content credit-wrap'>
        <p className='display-6 cast-text'>출연진</p>
        <div className='cast-wrap'>
          <div className='cast-list'>
            {credits.map((cast, idx) => {
              return (
                <div className='cast' key={idx}>
                  <div className='cast-img-wrap'>
                    {cast.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt='img'
                        className='cast-img'
                      />
                    ) : (
                      <div className='noimg'>
                        <i>이미지 정보 없음</i>
                      </div>
                    )}
                  </div>
                  <div className='py-1'>{cast.name}</div>
                  <div className='role-name'>{cast.character} 역</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 content'>
        <p className='display-6 cast-text'>비슷한 장르의 영화</p>
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
          {similar &&
            similar.map((movie, idx) => {
              return <MovieList movie={movie} idx={idx} key={idx} />;
            })}
        </div>
        <div>{loading && <Loading />}</div>
      </div>

      <div className='container-fluid px-5 content'>
        <p className='display-6 cast-text'>추천 영화</p>
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
          {recommendations &&
            recommendations.map((movie, idx) => {
              return <MovieList movie={movie} idx={idx} key={idx} />;
            })}
        </div>
        <div>{loading && <Loading />}</div>
      </div>
    </>
  );
}
export default Detail;
