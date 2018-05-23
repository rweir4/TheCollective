import React from 'react';

const Results = ({ results }) => {
  return (
    <section>
    <ul>
      <p>
        Items
      </p>
      <ul>
          {results.items}
      </ul>
      <p>
        Collections
      </p>
      <ul>
          {results.collections}
      </ul>
      <p>
        Users
      </p>
      <ul>
          {results.users}
      </ul>
    </ul>
  </section>
  );
};

export default Results;
