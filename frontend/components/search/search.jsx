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
       renderResults: "false"
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
    this.setState({renderResults: "true"});
  }

  closeResults() {
    this.setState({renderResults: "false"});
  }

  handleSubmit(e, type, id) {
    e.preventDefault();
    if (type === 'user') {
      this.props.history.push(`/profile/${id}`);
    } else if (type === 'collection') {
      this.props.history.push(`/collections/${id}`);
    } else if (type === 'item') {
      this.props.history.push(`/items/${id}`);
    }
    this.closeResults();
  }


  render() {
    let resultsContainer;
    const { results } = this.state;

    if (this.state.renderResults === "true") {
      resultsContainer = (
        <div className="outer-results" onClick={this.closeResults}>
          <div className="inner-results" onClick={e => e.stopPropagation()}>
            <ul id="search-results">
              <p className="search-headers">
                Items
              </p>
              <ul className="result-info">
                {results.items.slice(0,4).map(result => {
                  return <li key={result.id} onClick={e => this.handleSubmit(e,'item', result.id)}>{result.result}</li>
                })}
              </ul>
              <p className="search-headers">
                Collections
              </p>
              <ul className="result-info">
                {results.collections.slice(0,4).map(result => {
                  return <li key={result.id} onClick={e => this.handleSubmit(e,'collection', result.id)}>{result.result}</li>
                })}
              </ul>
              <p className="search-headers">
                Users
              </p>
              <ul className="result-info">
                {results.users.slice(0,4).map(result => {
                  return <li key={result.id} onClick={e => this.handleSubmit(e,'user', result.id)}>{result.result}</li>
                })}
              </ul>
            </ul>
          </div>
        </div>
      );
    } else {
      resultsContainer = null;
    }

    return (
      <div className="search">
        <form id="search-form" onClick={this.showResults} onSubmit={this.handleSubmit}>
          <img src={window.search} />
          <input
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleSearch}
            onClick={this.showResults}
          />
        </form>
        {resultsContainer}
      </div>
    );
  }
}

export default withRouter(Search);
