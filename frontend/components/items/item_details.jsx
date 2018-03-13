import React from 'react';
import { Link } from 'react-router-dom';
//import repin form

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState( {hover: true} );
  }

  onMouseLeave() {
    this.setState( {hover: false} );
  }

  render() {
    let buttons;
    if (this.state.hover) {
      buttons = (
        <div>
          <button
            className="CollectItem"
            onClick={() => this.props.openModal({modal: 'EditItem', item: this.props.item} )}>
            <img src={window.collect} />
          </button>
        </div>
      );
    } else {
      buttons = null;
    }

    return (
      <div className="item-details" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        { buttons }
        <Link to={`/items/${this.props.item.id}`}>
          <img className="item-img-details" src={this.props.item.image}></img>
          <p className="item-description">{this.props.item.description}</p>
        </Link>
      </div>
    );
  }
}

export default ItemDetails;
