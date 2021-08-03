
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

render() {
  return(
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Product Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <LoginButton />
      {this.props.auth0.isAuthenticated &&
        <LogoutButton />
      }
      <p>App Name Here</p>
      <nav><a>About Us</a></nav>
    </div>
  )
}
}

export default Header;