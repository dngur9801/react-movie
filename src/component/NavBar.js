import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
  const state = useSelector(state => state.movieReducer);

  return (
    <>
      <div className='header-position'></div>
      <Navbar collapseOnSelect expand='lg' variant='dark' id='navbar'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>ShowMV</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='navbar-right'>
            <Nav>
              <span className='nav-item'>
                <NavLink to='/' exact>
                  인기 영화
                </NavLink>
              </span>
              <span className='nav-item'>
                <NavLink to='/nowplaying'>현재 상영영화</NavLink>
              </span>
              <span className='nav-item'>
                <NavLink to='/upcoming'>개봉 예정영화</NavLink>
              </span>
              <span className='nav-item'>
                <NavLink to='/search'>영화검색</NavLink>
              </span>
              <span className='nav-item'>
                <NavLink to='/liked'>
                  찜한영화
                  {state.likedList.length !== 0 ? (
                    <span>({state.likedList.length})</span>
                  ) : null}
                </NavLink>
              </span>
              <span className='nav-item'>
                <NavLink to='/watch'>최근본영화</NavLink>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
