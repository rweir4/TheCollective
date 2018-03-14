import React from 'react';
import CollectionDetails from './collection_details';
import { ProtectedRoute } from '../../util/route_util';
import NavBarContainer from '../navBar/nav_bar_container';

class CollectionIndex extends React.Component {

  render() {

    console.log(this.props.collections)
    console.log(this.props.collection)
    if (this.props.collections[0]) {
      const collections = Object.values(this.props.collections).map(collection => {
        return ( <CollectionDetails
          currentLoggedInUser={this.props.currentLoggedInUser}
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
