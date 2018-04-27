import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  goHome(e) {
    e.preventDefault();
    if (this.props.history.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout(this.props.currentUser.id);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="nav-bar-container">
          <div className="nav-bar-left">
            <button className="home-btn" onClick={this.goHome}>
              <img src={window.logo} className="logo"/>
            </button>
            <SearchContainer />
          </div>
          <div className="nav-bar-right">
            <Link to={`/profile/${this.props.currentUser.id}`}>
              <img src={this.props.currentUser.image} />
              {this.props.currentUser.email}
            </Link>
            <button onClick={this.handleLogout}>Logout</button>
            <Link to={`/settings`}>
              <i className="fas fa-cog"></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NavBar;
