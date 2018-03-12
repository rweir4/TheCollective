import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

class ItemShow extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {
    if (this.props.item) {
      return (
        <div className="item-show">
          <Link className="back-to-feed" to='/'>Back to feed</Link>
          <div className="item-container">
            <div className="collect-bar">
              <Link to={`/items/${this.props.item.id}/edit`}>
                Collect
              </Link>
            </div>
            <div className="item-show-details">
              <div className="img-holder">
                <img className="item-img" src={this.props.item.image}></img>
              </div>
              <div className="item-info">
                <p className="item-description">{this.props.item.description}</p>
                <Link to={`/collections/${this.props.item.collection_id}`}>To Collection</Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading</p>
    }
  }
}

export default ItemShow;
