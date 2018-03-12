import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

const ItemDetails = (props) => (
  <div className="item-details">
    <button
      className="EditItem"
      onClick={() => props.openModal({modal: 'EditItem', item: props.item})}>
      <img src={window.edit} />
    </button>
    <button
      className="CollectItem"
      onClick={() => props.openModal({modal: 'EditItem', item: props.item} )}>
      <img src={window.collect} />
    </button>
    <Link to={`/items/${props.item.id}`}>
      <img className="item-img-details" src={props.item.image}></img>
      <p className="item-description">{props.item.description}</p>
    </Link>
  </div>
);

export default ItemDetails;
