import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

class ItemShow extends React.Component {
  componentDidMount() {
    
    this.props.fetchItem(this.props.match.params.itemId).then(() => {
      this.props.fetchUser(this.props.currentUserId);
    });
  }

  render() {

    if (this.props.currentUser) {
      

      const { item, currentUser } = this.props;

      let editBtn;
      if (currentUser.item_ids.includes(item.id)) {
        editBtn = (
          <button
            className="edit-btn"
            onClick={() => this.props.openModal({modal: 'EditItem', item})}>
            <i class="fas fa-pencil-alt"></i>
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
                  onClick={() => this.props.openModal({modal: 'EditItem', item: item} )}>
                  <img src={window.collect} />
                </button>
              </div>
              <div className="item-show-details">
                <div className="img-holder">
                  <img className="item-img" src={item.image}></img>
                </div>
                <div className="item-info">
                  <p className="item-description-show">{item.description}</p>
                  <Link to={`/collections/${item.collection_id}`}>{item.collection.title}</Link>
                  <Link to={`/profile/${item.author.id}`}>{item.author.email}</Link>
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
