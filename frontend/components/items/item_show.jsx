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
          <button className="back" onClick={this.props.history.goBack}>
            <i class="fa fa-angle-left"></i>
            <p>Back</p>
          </button>
          <div className="item-container-outer">
            <div className="item-container">
              <div className="collect-bar">
                <button
                  className="edit-item-show"
                  onClick={() => this.props.openModal({modal: 'EditItem', item: this.props.item})}>
                  <i class="fas fa-pencil-alt"></i>
                </button>

                <button
                  className="collect-item-show"
                  onClick={() => this.props.openModal({modal: 'EditItem', item: this.props.item} )}>
                  <img src={window.collect} />
                </button>
              </div>
              <div className="item-show-details">
                <div className="img-holder">
                  <img className="item-img" src={this.props.item.image}></img>
                </div>
                <div className="item-info">
                  <p className="item-description-show">{this.props.item.description}</p>
                  <Link to={`/collections/${this.props.item.collection_id}`}>To Collection</Link>
                </div>
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
