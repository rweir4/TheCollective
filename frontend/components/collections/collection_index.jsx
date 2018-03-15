import React from 'react';
import CollectionDetails from './collection_details';
import { ProtectedRoute } from '../../util/route_util';
import NavBarContainer from '../navBar/nav_bar_container';

class CollectionIndex extends React.Component {

  render() {
    if (this.props.collections[0]) {
      let isCurrentUser;
      const collections = Object.values(this.props.collections).map(collection => {
        isCurrentUser = collection.author_id === this.props.currentUserId;
        return ( <CollectionDetails
          isCurrentUser={isCurrentUser}
          openModal={this.props.openModal}
          key={collection.id}
          collection={ collection } /> );
      });

      return (
        <div className="parent-index">
          <div>
            <button
              className="addCollection"
              onClick={() => this.props.openModal({modal:'createCollection', item: undefined})}>
              <img src={window.red_item_btn} />
            </button>
            <ul className="collection-list">
              { collections }
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
  }
};

export default CollectionIndex;
