import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

class ItemShow extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {

    if (this.props.collection && this.props.author) {

      const { item, currentUser } = this.props;

      let editBtn;
      if (this.props.isCurrentUser) {
        editBtn = (
          <button
            className="edit-btn"
            onClick={() => this.props.openModal({modal: 'EditItem', item})}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        );
      } else {
        editBtn = null;
      }

      return (
        <div className="item-show">
          <button className="back" onClick={this.props.history.goBack}>
            <i class="fa fa-angle-left"></i>
            <p>Back</p>
          </button>
          <div className="item-container-outer">
            <div className="item-container">
              <div className="collect-bar">
                { editBtn }
                <button
                  className="collect-item-show"
                  onClick={() => this.props.openModal({modal: 'CollectItem', item: item} )}>
                  <img src={window.collect} />
                </button>
              </div>
              <div className="item-show-details">
                <div className="img-holder">
                  <img className="item-img" src={item.image}></img>
                </div>
                <div className="item-info">
                  <p className="item-description-show">{item.description}</p>
                  <br></br>
                  <div className="link-container">
                    <Link className="item-info-links" to={`/profile/${this.props.author.id}`}>
                      <img src={this.props.author.image} />
                      {this.props.author.email}
                    </Link>
                    <p> saved to </p>
                    <Link className="item-info-links" to={`/collections/${this.props.collection.id}`}>{this.props.collection.title}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="addItem"
            onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
            <img src={window.white_item_btn} />
          </button>
        </div>
      );
    } else {
      return <p>Loading</p>
    }
  }
}

export default ItemShow;
