import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorsList from '../errors/errors_list';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item.description,
      collection_id: '',
      imageFile: this.props.item.image,
      imageUrl: null
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleCollectionId = this.handleCollectionId.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchCollections();
    this.props.fetchUser(this.props.currentUserId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({item: nextProps.item});
    this.setState({collections: nextProps.collections});
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

  handleCollectionId(e) {
    this.setState({collection_id: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    };

    fileReader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("item[description]", this.state.description);
    formData.append("item[image]", this.state.imageFile);
    formData.append("item[collection_id]", this.state.collection_id);
    if (this.props.formType === 'edit') {
      formData.append("item[itemId]", this.props.item.id);
    }

    this.props.submitAction(formData);
    this.props.closeModal();
  }

  handleErrors() {
    if (this.props.errors[0]){
      this.props.openModal({modal: 'Errors', item: `${this.props.errors}`});
    }
  }

  render() {
    let image;
    let header;
    const { formType, errors } = this.props;


    if (formType === 'create') {
      image = (
        <div>
          <div className="form-img-holder">
            <input type="file" onChange={this.handleFile} />
            <img className="item-img" src={this.state.imageUrl} />
          </div>
        </div>
      );

      header = ( <p className="form-header">Create an Item</p> );

    } else {
      image = (
        <div className="form-img-holder">
          <img className="item-img" src={this.props.item.image}></img>
        </div>
      );
      header = <p className="form-header">{formType !== 'collect' ? 'Edit this item' : 'Save'}</p>;
    }

    if (this.props.collections[0]) {


      const { collections } = this.props;

      const collectionsList = Object.values(this.props.collections).map(collection => {
        return (
          <button
            onClick={this.handleCollectionId}
            key={collection.id}
            value={collection.id}>
            <p className="collection-title">{collection.title}</p>
            <img className="collect-btn" src={window.collect}></img>
          </button>
        );
      });

      this.handleErrors();

      return (
        <div className="create-item-background">
          <div className="create-item-container">
            <h1>{ header }</h1>
            <form onSubmit={this.handleSubmit}>
              { image }
              <textarea
                className = "form-item-description"
                value={this.state.description}
                onChange={this.handleDescription} />
              <div className="collections-list-container">
                <p className="collection-list-header">Choose a Collection</p>
                <ul className="collections-list">
                  { collectionsList }
                </ul>
              </div>
            </form>
          </div>
        </div>
      );

    } else {

      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
  }
}

export default ItemForm;
