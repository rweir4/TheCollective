import React from 'react';
import { Link } from 'react-router-dom';

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
    const { isCurrentUser, item } = this.props;
    let collectBtn;
    let editBtn;
    if (this.state.hover && isCurrentUser) {
      collectBtn = (
        <div>
          <button
            className="CollectItem"
            onClick={() => this.props.openModal({modal: 'CollectItem', item} )}>
            <img src={window.collect} />
          </button>
        </div>
      );

      if (isCurrentUser) {
        editBtn = (
          <button
            className="edit-btn"
            onClick={() => this.props.openModal({modal: 'EditItem', item })}>
            <i class="fas fa-pencil-alt"></i>
          </button>
        );
      } else {
        editBtn = null;
      }
    } else {
      collectBtn = null;
    }

    return (
      <div className="item-details" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        { editBtn }
        { collectBtn }
        <Link to={`/items/${this.props.item.id}`}>
          <img className="item-img-details" src={item.image}></img>
          <p className="item-description">{item.description}</p>
        </Link>
      </div>
    );
  }
}

export default ItemDetails;
