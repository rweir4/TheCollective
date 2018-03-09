import React from 'react';
import ItemDetails from './item_details';

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    if (this.props.items) {
      const items = this.props.items.map(item => {
        return ( <ItemDetails key={item.id} item={ item } /> );
      });
      return (
        <div className="item-index">
          <ul className="item-list">
            { items }
          </ul>
        </div>
      );
    } else {
      <p>Loading</p>
    }
  }
};

export default ItemIndex;
