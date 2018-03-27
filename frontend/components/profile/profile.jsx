import React from 'react';
import ItemDetails from '../items/item_details';
import CollectionDetails from '../collections/collection_details';
import NavBarContainer from '../navBar/nav_bar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showItems: 'collections',
      follows: false,
      clickable: true
    };
    this.toggleItems = this.toggleItems.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.determineShow = this.determineShow.bind(this);
  }


  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.fetchUser(this.props.currentUserId).then((user) => {
      // debugger
      if (user.user.follows.includes(userId)) {
        this.setState({follows: true});
      }
    });

    this.props.fetchUser(userId);
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

  toggleFollow() {
    if (this.state.follow && this.state.clickable) {
      this.setState({clickable: false});

      this.props.createFollow(this.props.currentPageUser.id).then(() => {
        this.setState({follow: false});
        this.setState({clickable: true});
      });
    } else if (!this.state.follow && this.state.clickable) {
      this.setState({clickable: false});

      this.props.deleteFollow(this.props.currentPageUser.id).then(() => {
        this.setState({follow: true});
        this.setState({clickable: true});
      });
    }
  }

  determineShow() {
    const { currentPageUser, currentLoggedInUser, openModal, collections, items } = this.props;

    let toShowClass;
    let toShow;
    let btn;
    if (this.state.showItems === 'items') {
      if (currentPageUser.id === currentLoggedInUser.id) {
        btn = (
          <button
            className="add-item-container"
            onClick={() => openModal({modal:'CreateItem', item: undefined})}>
            <img src={window.red_item_btn} />
          </button>
        );
      }
      toShow = Object.values(items).map(item => {
          return ( <ItemDetails
            isCurrentUser={currentLoggedInUser.id}
            openModal={openModal}
            key={item.id}
            item={ item } />
          );
        }
      );

      toShowClass="item-list";
    } else {
      if (currentPageUser.id === currentLoggedInUser.id) {
        btn = (
          <button
            className="add-collection-container"
            onClick={() => openModal({modal:'CreateCollection', item: undefined})}>
            <img src={window.red_item_btn} />
          </button>
        );
      }

      let collectionItems;
      let itemsInfo;
      const that = Object.assign({}, this);
      toShow = Object.values(collections).map(collection => {
        // debugger
        collectionItems = Object.values(collection.item_ids.slice(0,3));

        itemsInfo = [];

        collectionItems.forEach(item_id => {
          that.props.items.forEach(item => {
            if (item.id === item_id) {
              itemsInfo.push(item);
            }
          });
        });

        //gonna need a default image for if the board doesnt have three
        return ( <CollectionDetails
          items={itemsInfo}
          isCurrentUser={currentLoggedInUser.id}
          openModal={openModal}
          key={collection.id}
          collection={ collection }/>
        );
      });


      toShowClass="collection-list";
    }

    return {
      btn: btn,
      toShow: toShow,
      toShowClass: toShowClass
    };
  }

  render() {
    if (this.props.collections[0] && this.props.items[0] && this.props.currentPageUser) {

      const { currentPageUser, currentLoggedInUser, openModal, collections, items } = this.props;

      const show = this.determineShow();
      const btn = show.btn;
      const toShow = show.toShow;
      const toShowClass = show.toShowClass;

      return (
        <div>
          <NavBarContainer />
          <div className="profile-container">
            <div className="profile-info">
              <p>{currentPageUser.email}</p>
              <p>{currentPageUser.bio}</p>
              <img src={currentPageUser.image} />
              <button onClick={this.toggleFollow}>{this.state.follow ? 'Unfollow': 'Follow'}</button>
            </div>
            <div className="profile-nav">
              <button onClick={this.toggleItems('collections')}>Collections</button>
              <button onClick={this.toggleItems('items')}>Items</button>
            </div>
            <div className={toShowClass}>
              <ul>
                { btn }
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
