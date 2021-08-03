import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


render() {
  return(
    <div>
      <p>App Name Here</p>
      <nav><a>About Us</a></nav>
    </div>
  )
}
}

export default Header;