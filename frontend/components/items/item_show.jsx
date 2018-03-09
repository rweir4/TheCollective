import React from 'react';
import { Link } from 'react-router-dom';

class ItemShow extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {
    if (this.props.item) {
      return (
        <div className="item-container">
          <img className="item-img" src={this.props.item.image}></img>
          <p className="item-description">{this.props.item.description}</p>
          <Link to={`/collections/${this.props.item.collection_id}`}>To Collection</Link>
        </div>
      );
    } else {
      return <p>Loading</p>
    }
  }
}

export default ItemShow;
