import React from 'react';
import ItemDetails from '../items/item_details';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';

class CollectionShow extends React.Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.collectionId);
    this.props.fetchUser(this.props.currentUserId);
  }


  render() {
    if (this.props.collection && this.props.currentUser) {

      const items = Object.values(this.props.collection.items).map(item => {
        return ( <ItemDetails
          currentUser = {this.props.currentUser}
          key={item.id}
          item={item}/> );
      });

      let editBtn;
      if (this.props.currentUser.collection_ids.includes(this.props.collection.id)) {
        editBtn = (
          <button
            className="edit-collection"
            onClick={() => this.props.openModal({modal:'EditCollection', item: this.props.collection})}>
            <i class="fas fa-pencil-alt"></i>
          </button>
        );
      } else {
        editBtn = null;
      }

      return (
        <div>
          <ProtectedRoute path="/" component={ NavBarContainer } />
          { editBtn }
          <div className="collection-info">
            <p className="collection-show-title">{this.props.collection.title}</p>
            <p>{items.length} Items</p>
            <p>{this.props.collection.description}</p>
          </div>
          <div>
            <ul className="items">
              <button
                className="collection-add-item"
                onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
                <img src={window.red_item_btn} />
              </button>
              { items }
            </ul>
          </div>
        </div>
      );
    } else {
      return ( <p>Loading</p> );
    }
  }
}

export default CollectionShow;
