import React from 'react';
import ItemDetails from '../items/item_details';
import Loading from '../loading';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';

class CollectionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };

    this.removeCollection = this.removeCollection.bind(this);
  }
  componentDidMount() {
    window.scroll(0,0);
    this.props.fetchCollection(this.props.match.params.collectionId);
  }

  componentWillReceiveProps(newProps) {

    if (!newProps.items[0]) {
      return null;
    } else {
      this.setState({items: newProps.items});
    }
  }

  removeCollection () {
    this.props.deleteCollection(this.props.collection.id).then(() => {
      this.props.history.push(`/profile/${this.props.author.id}`);
    });
  }


  render() {

    if (this.props.collection) {
      const { isCurrentUser, items, author, collection } = this.props;

      const itemsList = Object.values(this.state.items).map(item => {
        debugger
        return ( <ItemDetails
          openModal={this.props.openModal}
          isCurrentUser={isCurrentUser}
          key={item.id}
          item={item}/> );
      });

      let editBtn;
      let deleteBtn;
      let addItemBtn;
      if (isCurrentUser) {
        editBtn = (
          <button
            className="edit-collection"
            onClick={() => this.props.openModal({modal:'EditCollection', item: this.props.collection})}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        );

        deleteBtn = (
          <button
            className="delete-collection-show"
            onClick={this.removeCollection}>
            Delete Collection
          </button>
        );

        addItemBtn = (
          <button
            className="collection-add-item"
            onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
            <img src={window.red_item_btn} />
          </button>
        )

      } else {
        editBtn = null;
        deleteBtn = null;
        addItemBtn = null;
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
            <ul className="item-list">
              { addItemBtn }
              { itemsList }
            </ul>
          </div>
          <button
            className="addItem"
            onClick={() => this.props.openModal({modal:'CreateItem', item: undefined})}>
            <img src={window.white_item_btn} />
          </button>
        </div>
      );
    } else {
      return <Loading/>;
    }
  }
}

export default CollectionShow;
