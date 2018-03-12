import React from 'react';
import CollectionDetails from './collection_details';

class CollectionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    if (this.props.currentUser) {

      const { collections } = this.props;

      const collectionsList = collections.map(collection => {
        return (
          <button
            onClick={this.handleCid}
            key={collection.id}
            value={collection.id}>
            <p className="collection-title">{collection.title}</p>
            <img className="collect-btn" src={window.collect}></img>
          </button>
        );
      });
    }
    if (this.props.collections) {
      const collections = this.props.collections.map(collection => {
        return ( <CollectionDetails key={collection.id} collection={collection} /> )
      });

      return (
        <div>
          <ul>
            <div>
              <button onClick={() => openModal('CreateCollection')}>ADD A COLLECTION</button>
              <p>Create A Collection</p>
            </div>
            { collections }
          </ul>
        </div>
      );
    } else {
      <p>Loading</p>
    }
  }
}

export default CollectionIndex;
