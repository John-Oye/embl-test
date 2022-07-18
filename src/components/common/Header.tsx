import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/images/logo.png';
import ThemeToggle from '../Theme/themeToggle';


function Header() {
  return (
    <>
      <Navbar className='color-nav' variant='light'>
        <Container className='nav-list-item' >
         <Navbar.Brand href="#">            
            <img
              alt=""
              src= {logo}
              width="40"
              height="30"
              className="App-logo align-top"
            />{' '}
            PDCM Finder</Navbar.Brand>
            <div className="d-flex">
              <ThemeToggle />
          </div>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;