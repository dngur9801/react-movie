import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <div className='header-position'></div>
      <Navbar collapseOnSelect expand='lg' variant='dark' id='navbar'>
        <Container>
          <Navbar.Brand href='/'>
            <i>MovieBox</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='navbar-right'>
            <Nav>
              <Link to='/'>인기 영화</Link>
              <Link to='/nowplaying'>현재 상영영화</Link>
              <Link to='/upcoming'>개봉 예정영화</Link>
              <Link to='/search'>영화검색</Link>
              <Link to='/search'>찜한영화</Link>
              <Link to='/search'>최근본영화</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
