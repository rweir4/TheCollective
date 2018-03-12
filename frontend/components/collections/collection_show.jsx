import React from 'react';
import ItemDetails from '../items/item_details';
import NavBarContainer from '../navBar/nav_bar_container';
import { ProtectedRoute } from '../../util/route_util';

class CollectionShow extends React.Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.collectionId);
  }


  render() {
    if (this.props.collection) {

      const items = Object.values(this.props.collection.items).map(item => {
        return ( <ItemDetails key={item.id} item={item} page={'collection'}/> )
      });

      return (
        <div>
          <ProtectedRoute path="/" component={ NavBarContainer } />
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
