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
      let editBtn;
      if (this.props.currentLoggedInUser.collection_ids.includes(this.props.collection.id)) {
        editBtn = (
          <button
            className="EditCollection"
            onClick={() => this.props.openModal({modal:'EditCollection', item: this.props.collection})}>
            <i class="fas fa-pencil-alt"></i>
          </button>
        );
      } else {
        editBtn = null;
      }
      return (
        <div className="collection-details" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Link to={`/collections/${this.props.collection.id}`}>
            <div className="collection-thumbnail">
              hi
            </div>
            <p className="collection-description">{this.props.collection.title}</p>
            { editBtn }
          </Link>
        </div>
      );
    }
}

export default CollectionDetails;
