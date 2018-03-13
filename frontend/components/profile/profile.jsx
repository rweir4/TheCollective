import React from 'react';
import ItemDetails from '../items/item_details';
import CollectionDetails from '../collections/collection_details';
import NavBarContainer from '../navBar/nav_bar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showItems: false };
    this.toggleItems = this.toggleItems.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  toggleItems() {
    if (this.state.showItems) {
      this.setState({showItems: false});
    } else {
      this.setState({showItems: true});
    }
  }

  render() {

    if (this.props.currentUser) {
      const { currentUser } = this.props;
      let toShow;
      if (this.state.showItems) {
        toShow = Object.values(currentUser.items).map(item => {
          return ( <ItemDetails
            currentUser = {this.props.currentUser}
            openModal={this.props.openModal}
            key={item.id}
            item={ item } />
          );
        });
      } else {
        toShow = Object.values(currentUser.collections).map(collection => {
          return ( <CollectionDetails
            openModal={this.props.openModal}
            key={collection.id}
            collection={ collection } />
          );
        });
      }

      return (
        <div>
          <NavBarContainer />
          <div className="profile-info">
            {currentUser.email}
            {currentUser.bio}
            <img src={currentUser.image} />
          </div>
          <div className="profile-nav">
            <button onClick={this.toggleItems}>Items</button>
            <button onClick={this.toggleItems}>Collections</button>
          </div>
          <div>
            { toShow }
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
