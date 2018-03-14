import React from 'react';
import ItemDetailsContainer from '../items/item_details_container';
import CollectionDetails from '../collections/collection_details';
import NavBarContainer from '../navBar/nav_bar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showItems: 'collections' };
    this.toggleItems = this.toggleItems.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  toggleItems(field) {
    return (e) => {
      if (field === 'items') {
        this.setState({showItems: 'items'});
      } else {
        this.setState({showItems: 'collections'});
      }
    };
  }

  render() {

    if (this.props.currentPageUser && this.props.currentLoggedInUser) {
      const { currentPageUser } = this.props;

      let toShowClass;
      let toShow;

      if (this.state.showItems === 'items') {
        toShow = Object.values(currentPageUser.items).map(item => {
          return ( <ItemDetailsContainer
            currentUser={this.props.currentLoggedInUser}
            openModal={this.props.openModal}
            key={item.id}
            item={ item } />
          );
        });

        toShowClass="item-list";
      } else {
        toShow = Object.values(currentPageUser.collections).map(collection => {
          return ( <CollectionDetails
            currentLoggedInUser = {this.props.currentLoggedInUser}
            openModal={this.props.openModal}
            key={collection.id}
            collection={ collection } />
          );
        });

        toShowClass="collection-list";
      }

      let addCollectionBtn;
      if (currentPageUser.id === this.props.currentLoggedInUser.id) {
        addCollectionBtn = (
          <button
            className="add-collection-container"
            onClick={() => this.props.openModal({modal:'CreateCollection', item: undefined})}>
            <img src={window.red_item_btn} />
          </button>
        );
      } else {
        addCollectionBtn = null;
      }

      return (
        <div>
          <NavBarContainer />
          <div className="profile-container">
            <div className="profile-info">
              <p>{currentPageUser.email}</p>
              <p>{currentPageUser.bio}</p>
              <img src={currentPageUser.image} />
            </div>
            <div className="profile-nav">
              <button onClick={this.toggleItems('collections')}>Collections</button>
              <button onClick={this.toggleItems('items')}>Items</button>
            </div>
            <div className={toShowClass}>
              <ul>
                { addCollectionBtn }
                { toShow }
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}

export default Profile;
