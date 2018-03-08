import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goHome(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <button className="home-btn" onClick={this.goHome}><img src={window.logo} className="logo"/></button>
        </div>
        <div className="nav-bar-right">
          <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default NavBar;
