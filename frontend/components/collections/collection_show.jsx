import React from 'react';
import ItemDetails from '../items/item_details';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';

class CollectionShow extends React.Component {
  constructor(props) {
    super(props);

    this.removeCollection = this.removeCollection.bind(this);
  }
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.collectionId);
  }

  removeCollection () {
    this.props.deleteCollection(this.props.collection.id).then(() => {
      this.props.history.push(`/profile/${this.props.author.id}`);
    });
  }


  render() {

    if (this.props.collection) {
      const { isCurrentUser, items, author, collection } = this.props;

      const itemsList = Object.values(items).map(item => {
        return ( <ItemDetails
          openModal={this.props.openModal}
          isCurrentUser={isCurrentUser}
          key={item.id}
          item={item}/> );
      });

      let editBtn;
      let deleteBtn;
      if (isCurrentUser) {
        editBtn = (
          <button
            className="edit-collection"
            onClick={() => this.props.openModal({modal:'EditCollection', item: this.props.collection})}>
            <i class="fas fa-pencil-alt"></i>
          </button>
        );

        deleteBtn = (
          <button
            className="delete-collection-show"
            onClick={this.removeCollection}>
            Delete Collection
          </button>
        );

      } else {
        editBtn = null;
        deleteBtn = null;
      }

      return (
        <div>
          <ProtectedRoute path="/" component={ NavBarContainer } />
          { editBtn }
          <div className="collection-info">
            <p className="collection-show-title">{collection.title}</p>
            <p>{items.length} Items</p>
            <p>{collection.description}</p>
            { deleteBtn }
          </div>
          <div>
            <ul className="container-item-list">
              <button
                className="collection-add-item"
                onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
                <img src={window.red_item_btn} />
              </button>
              { itemsList }
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
