import React from 'react';
import CollectionDetails from './collection_details';
import { ProtectedRoute } from '../../util/route_util';
import NavBarContainer from '../navBar/nav_bar_container';

class CollectionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {

    if (this.props.collections[0]) {
      const collections = Object.values(this.props.collections).map(collection => {
        return ( <CollectionDetails
          openModal={this.props.openModal}
          key={collection.id}
          collection={ collection } /> );
      });

      return (
        <div className="parent-index">
          <div>
            <ProtectedRoute path="/" component={ NavBarContainer } />
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
          <ProtectedRoute path="/" component={ NavBarContainer } />
          <p>Loading</p>
        </div>
      );
    }
  }
};

export default CollectionIndex;
