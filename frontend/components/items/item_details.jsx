import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = (props) => (
  <div>
    <Link to={`/items/${props.item.id}`}>
      <img className="item-img" src={props.item.img_url}></img>
      <p className="item-description">{props.item.description}</p>
    </Link>
  </div>
);

export default ItemDetails;
