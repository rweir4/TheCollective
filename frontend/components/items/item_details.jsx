import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

const ItemDetails = (props) => (
  <div className="item-details">
    <Link to={`/items/${props.item.id}`}>
      <img className="item-img-details" src={props.item.image}></img>
      <p className="item-description">{props.item.description}</p>
    </Link>
  </div>
);

export default ItemDetails;
