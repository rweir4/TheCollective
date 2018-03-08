import React from 'react';
import { Link } from 'react-router-dom';

const CollectionDetails = (props) => (
  <div>
    <p>I'm a collection!</p>
    <Link to={`/collections/${props.collection.id}`}>
      <p>{props.collection.title}</p>
    </Link>
  </div>
);

export default CollectionDetails;
