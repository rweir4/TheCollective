import React from 'react';
import ItemDetails from '../items/item_details';

class CollectionShow extends React.Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.collectionId);
  }


  render() {
    if (this.props.collection) {
      const items = Object.values(this.props.collection.items).map(item => {
        return ( <ItemDetails key={item.id} item={item} /> )
      });

      return (
        <div>
          {this.props.collection.title}
          <ul>
            { items }
          </ul>
        </div>
      );
    } else {
      return ( <p>Loading</p> );
    }
  }
}

export default CollectionShow;
