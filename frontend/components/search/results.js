import React from 'react';

const Results = (props) => (
  <section>
    <ul>
      <li>
        <p>
          Items
        </p>
        {this.props.results.items}
      </li>
      <li>
        <p>
          Collections
        </p>
        {this.props.results.collections}
      </li>
      <li>
        <p>
          Users
        </p>
        {this.props.results.users}
      </li>
    </ul>
  </section>
);

export default Results;
