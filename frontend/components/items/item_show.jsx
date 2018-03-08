import React from 'react';

class ItemShow extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
  }

  render() {
    if (this.props.item) {
      return (
        <div>
          <img className="item-img" src={this.props.item.img_url}></img>
          <p className="item-description">{this.props.item.description}</p>
        </div>
      );
    } else {
      return <p>Loading</p>
    }
  }
}

export default ItemShow;
