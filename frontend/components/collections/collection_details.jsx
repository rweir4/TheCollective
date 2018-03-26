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
      if (this.props.isCurrentUser) {
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

      const images = [];
      this.props.items.forEach(item => {
        if (item) {
          images.push(item.image);
        } else {
          images.push(window.default_img);
        }
      });

      const items = (
        <div>
          <div className="img-left">
            <img className="img-1" src={images[0]} />
          </div>
          <div className="img-right">
            <img className="img-2" src={images[1]} />
            <img className="img-3" src={images[2]} />
          </div>
        </div>
      );

      return (
        <div className="collection-details" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Link to={`/collections/${this.props.collection.id}`}>
            <div className="collection-thumbnail">
              { items }
            </div>
            <p className="collection-description">{this.props.collection.title}</p>
          </Link>
          { editBtn }
        </div>
      );
    }
}

export default CollectionDetails;
