import React from 'react';
import ItemDetails from '../items/item_details';
import CollectionDetails from '../collections/collection_details';
import NavBarContainer from '../navBar/nav_bar_container';
import Loading from '../loading';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
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
    const that = this;
    this.props.fetchUser(this.props.currentUserId).then((user) => {
      if (user.user.follows.includes(parseInt(userId))) {
        that.setState({follows: true});
        that.setState({items: this.props.items});
      }
    });

    this.props.fetchUser(userId);
  }

  componentWillReceiveProps(newProps) {
    const userId = newProps.match.params.userId;
    const that = this;
    if (!newProps.items[0]) {
      return null;
    } else {
      // debugger
      // that.setState({items: newProps.items});
    }
    if (userId != this.props.currentPageUser.id) {
      this.props.fetchUser(this.props.match.params.userId).then((user) => {
        if (this.props.currentLoggedInUser.follows.includes(parseInt(userId))) {
          that.setState({follows: true});
        } else {
          that.setState({follows: false});
        }
      });
    }
    that.setState({items: newProps.items});
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
    if (this.state.follows && this.state.clickable) {
      this.setState({clickable: false});

      this.props.deleteFollow(this.props.currentPageUser.id, this.props.currentUserId).then(() => {
        this.setState({follows: false});
        this.setState({clickable: true});
      });
    } else if (!this.state.follow && this.state.clickable) {
      this.setState({clickable: false});

      this.props.createFollow(this.props.currentPageUser.id).then(() => {
        this.setState({follows: true});
        this.setState({clickable: true});
      });
    }
  }

  determineShow() {
    const { currentPageUser, currentLoggedInUser, openModal, collections } = this.props;
    const { items } = this.state;
    let toShowClass;
    let toShow;
    let btn;
    let follow;
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
        collectionItems = Object.values(collection.item_ids.slice(0,3));
        itemsInfo = [];

        collectionItems.forEach(item_id => {
          that.state.items.forEach(item => {
            if (item.id === item_id) {
              itemsInfo.push(item.image);
            }
          });
        });

        while (itemsInfo.length < 3) {
          itemsInfo.push(window.default_img);
        }

        return ( <CollectionDetails
          items={itemsInfo}
          isCurrentUser={currentLoggedInUser.id}
          openModal={openModal}
          key={collection.id}
          collection={ collection }/>
        );
      });


      toShowClass="collection-list";

      if (currentPageUser.id !== currentLoggedInUser.id) {
        follow = ( <button onClick={this.toggleFollow}>{this.state.follows ? 'Unfollow': 'Follow'}</button> );
      }
    }
    return {
      btn: btn,
      toShow: toShow,
      toShowClass: toShowClass,
      follow: follow
    };
  }

  render() {
    if (this.props.collections[0] &&
      this.state.items[0] &&
      this.props.currentPageUser &&
      this.props.currentLoggedInUser) {

      const { currentPageUser, currentLoggedInUser, openModal, collections } = this.props;
      const { items } = this.state;

      const show = this.determineShow();
      const btn = show.btn;
      const toShow = show.toShow;
      const toShowClass = show.toShowClass;
      const follow = show.follow;

      return (
        <div>
          <NavBarContainer />
          <div className="profile-container">
            <div className="profile-info">
              <p>{currentPageUser.email}</p>
              <p>{currentPageUser.bio}</p>
              <img src={currentPageUser.image} />
              { follow }
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
        <Loading />
      );
    }
  }
}

export default Profile;
