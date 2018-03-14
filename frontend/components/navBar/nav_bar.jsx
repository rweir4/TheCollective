import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: ''};

    this.handleLogout = this.handleLogout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  goHome(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  //move search to own container/element
  handleSearch(e) {
    this.setState({search: e.target.value});
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
            <button className="home-btn" onClick={this.goHome}><img src={window.logo} className="logo"/></button>
            <div className="search">
              <input placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
            </div>

          </div>
          <div className="nav-bar-right">
            <Link to={`/profile/${this.props.currentUser.id}`}>
              <img className src={this.props.currentUser.image} />
              {this.props.currentUser.email}
            </Link>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NavBar;
