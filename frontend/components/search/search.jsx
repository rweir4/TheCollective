import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    this.setState({search: e.target.value}).then(() => {

    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchUser(this.state.search).then(payload => {
      this.props.history.push(`/profile/${payload.user.id}`);
    });
  }


  render() {
    return (
      <div className="search">
        <form id="search-form" onSubmit={this.handleSubmit}>
            <img src={window.search} />
            <input placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
