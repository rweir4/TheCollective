import React from 'react';
import { withRouter } from 'react-router-dom';
import Results from './results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: {
          items: [],
          collections: [],
          users: []
       },
       renderResults: false
     };

    this.handleSearch = this.handleSearch.bind(this);
    this.showResults = this.showResults.bind(this);
    this.closeResults = this.closeResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    this.setState({search: e.target.value});
    this.props.fetchQuery(e.target.value).then(query => {
      this.setState({ results: query.results });
    });
  }

  showResults() {
    this.setState({renderResults: true});
  }

  closeResults() {
    this.setState({renderResults: false});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchUser(this.state.search).then(payload => {
      this.props.history.push(`/profile/${payload.user.id}`);
    });
  }


  render() {
    let results;
    if (this.state.renderResults === true) {
      results = (
        <div className="outer-results">
          <Results results={this.state.results} />
        </div>
      );
    } else {
      results = null;
    }

    return (
      <div className="search" onClick={this.showResults}>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <img src={window.search} />
          <input
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleSearch}
            onClick={this.showResults}
          />
        </form>
        {results}
      </div>
    );
  }
}

export default withRouter(Search);
