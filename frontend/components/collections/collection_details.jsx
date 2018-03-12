import React from 'react';
import { Link } from 'react-router-dom';

class CollectionDetails extends React.Component {
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
          <button
            className="EditCollection"
            onClick={() => this.props.openModal({modal: 'EditCollection', item: this.props.collection})}>
            <img className="edit-img" src={window.edit} />
          </button>
        );
      } else {
        buttons = null;
      }


      return (
        <div className="collection-details" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Link to={`/collections/${this.props.collection.id}`}>
            <div className="collection-thumbnail">
              hi
            </div>
            <p className="collection-description">{this.props.collection.title}</p>
            { buttons }
          </Link>
        </div>
      );
    }
}

export default CollectionDetails;
