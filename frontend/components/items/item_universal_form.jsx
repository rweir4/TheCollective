import React from 'react';
import { Redirect } from 'react-router-dom';

class CollectionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

  handleCid(e) {
    this.setState({collection_id: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({collection_id: e.target.key});

    this.props.submitAction(formData);
    this.props.closeModal();
  }

  render() {
    let image;
    let header;

    if (this.props.formType === 'create') {
      image = (
        <div>
          <div className="form-img-holder">
            <input className="file-btn" type="file" onChange={this.handleFile} />
            <img className="item-img" src={this.state.imageUrl} />
          </div>
        </div>
      );

      header = <p className="form-header">Add a Pin</p>

    } else {
      image = (
        <div className="form-img-holder">
          <img className="item-img" src={this.props.item.image}></img>;
        </div>
      );
      header = <p className="form-header">Edit</p>
    }

    if (this.props.currentUser) {

      const { collections } = this.props;

      const collectionsList = Object.values(collections).map(collection => {
        return (
          <button
            onClick={this.handleCid}
            key={collection.id}
            value={collection.id}>
            {collection.title}
          </button>
        );
      });

      return (
        <div className="create-item-background">
          <div className="create-item-container">
            <h1>{ header }</h1>
            <form onSubmit={this.handleSubmit}>
              { image }
              <textarea
                className = "item-description"
                value={this.state.description}
                onChange={this.handleDescription} />
              <ul className="collections-list">
                { collectionsList }
              </ul>
            </form>
          </div>
        </div>
      );

    } else {
      return (
        <p>Loading</p>
      );
    }
  }
}

export default CollectionsList;
