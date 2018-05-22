import React from 'react';
import { withRouter } from 'react-router-dom';
import Results from './results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: ''
     };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    this.setState({search: e.target.value}).then(() => {
      this.props.fetchQuery(this.state.search).then(results => {
        this.setState({ results });
      });
    });
  }

  handleSearchClose() {

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchUser(this.state.search).then(payload => {
      this.props.history.push(`/profile/${payload.user.id}`);
    });
  }


  render() {
    let results;
    if (this.state.results !== '') {
      results = <Results results={this.state.results}/> ;
    } else {
      results = null;
    }

    return (
      <div className="search">
        <form id="search-form" onSubmit={this.handleSubmit}>
            <img src={window.search} />
            <input
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleSearch}
            />
        </form>
        { results }
      </div>
    );
  }
}

export default withRouter(Search);
