import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { movieApi } from '../api/axios';
import Loading from './Loading';
import MovieList from './MovieList';

function Person() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);
  const [personImages, setPersonImages] = useState([]);
  const [personCredits, setPersonCredits] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log(12);
    movieApi.person(id).then(result => {
      setPerson(result.data);
      setLoading(false);
    });

    movieApi.personImages(id).then(result => {
      setPersonImages(result.data.profiles);
    });

    movieApi.personCredits(id).then(result => {
      setPersonCredits(result.data.cast);
    });
  }, []);

  if (loading) return <div>{loading && <Loading />}</div>;
  if (!person) return null;
  return (
    <>
      <div className='container-fluid px-5 content person-wrap'>
        <div className='card-wrap mt-5 mb-5'>
          <div className='row row-cols-1 row-cols-md-3'>
            <Card className='nobackground'>
              {person.profile_path && (
                <Card.Img
                  variant='top'
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : '../noimg.jpeg'
                  }
                  alt={person.name}
                  title={person.name}
                />
              )}
            </Card>
            <Card className='right-text-wrap nobackground'>
              <Card.Body className='person-texts'>
                <div>
                  <h1 className='person-kr-title display-5'>
                    {person.name && person.name}
                  </h1>
                </div>
                <div className='person-detail mt-5'>
                  <div className='person-list'>
                    <span className='list-title'>그외 알려진 이름</span>
                    {person.also_known_as ? (
                      person.also_known_as.map((name, idx) => {
                        return <span key={idx}>{name}</span>;
                      })
                    ) : (
                      <span>정보가 없습니다.</span>
                    )}
                  </div>
                  <div className='person-list'>
                    <span className='list-title'>생년월일</span>
                    <span>
                      {person.birthday ? person.birthday : '정보가 없습니다.'}
                    </span>
                  </div>
                  <div className='person-list'>
                    <span className='list-title'>출생지</span>
                    <span>
                      {person.place_of_birth
                        ? person.place_of_birth
                        : '정보가 없습니다.'}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 content person-images-wrap'>
        <p className='display-6 cast-text'>이미지</p>
        <div className='cast-wrap'>
          <div className='cast-list'>
            {personImages.map((cast, idx) => {
              return (
                <div className='cast' key={idx}>
                  <div className='cast-img-wrap'>
                    {
                      <img
                        src={
                          cast.file_path
                            ? `https://image.tmdb.org/t/p/w500${cast.file_path}`
                            : '../noimg.jpeg'
                        }
                        alt='img'
                        className='cast-img'
                      />
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='container-fluid px-5 content'>
        <p className='display-6 cast-text'>{person.name} 배우의 출연작품</p>
        <div className='row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
          {personCredits &&
            personCredits.map((movie, idx) => {
              return <MovieList movie={movie} idx={idx} key={idx} />;
            })}
        </div>
        <div>{loading && <Loading />}</div>
      </div>
    </>
  );
}
export default Person;
