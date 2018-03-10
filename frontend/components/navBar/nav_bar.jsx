import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: ''};

    this.handleLogout = this.handleLogout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <button className="home-btn" onClick={this.goHome}><img src={window.logo} className="logo"/></button>
          <div className="search">
            <input placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
          </div>

        </div>
        <div className="nav-bar-right">
          <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default NavBar;
