import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => alert('Your account logout'))
      .catch(error => console.log(error))
  }
  return (
    <Navbar bg="light" expand="lg" className='mb-4 px-lg-4'>
      <Container fluid>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav
            className="ms-auto my-2 my-lg-0"
          >
            <Nav.Link href="#action1">All NEWS</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {user?.uid ?
              <Button onClick={handelLogOut} variant="light">Logout</Button>
              : <>
                <Link to='/login'><Button variant="outline-primary">Login</Button></Link>
                <Link to='/register' ><Button variant="outline-warning">Register</Button></Link>
              </>
            }
            <Link to='/profile'>
              <span className='fw-bold'>{user?.displayName} </span>
              {user?.photoURL ?
                <Image src={user?.photoURL} roundedCircle style={{ height: '30px' }} referrerPolicy='no-referrer'></Image>
                : <FaUser></FaUser>
              }
            </Link>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;