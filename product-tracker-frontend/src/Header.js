import React from 'react'
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