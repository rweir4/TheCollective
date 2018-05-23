import React from 'react';

const Results = ({ results }) => {
  return (
  <ul id="search-results">
    <p className="search-headers">
      Items
    </p>
    <ul className="result-info">
      {results.items.slice(0,5).map((result, id) => {
        return <li key={id}>{result}</li>
      })}
    </ul>
    <p className="search-headers">
      Collections
    </p>
    <ul className="result-info">
      {results.collections.slice(0,5).map((result, id) => {
        return <li key={id}>{result}</li>
      })}
    </ul>
    <p className="search-headers">
      Users
    </p>
    <ul className="result-info">
      {results.users.slice(0,5).map((result, id) => {
        return <li key={id}>{result}</li>
      })}
    </ul>
  </ul>
);
};

export default Results;
