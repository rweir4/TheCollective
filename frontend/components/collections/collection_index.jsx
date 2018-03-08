import React from 'react';
import CollectionDetails from './collection_details';

class CollectionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    if (this.props.collections) {
      const collections = this.props.collections.map(collection => {
        return ( <CollectionDetails key={collection.id} collection={collection} /> )
      });

      return (
        <div>
          <ul>
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
