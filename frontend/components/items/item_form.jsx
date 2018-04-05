import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorsList from '../errors/errors_list';
import { withRouter } from 'react-router-dom';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item.description,
      collection_id: '',
      imageFile: this.props.item.image,
      imageUrl: null,
      url: '',
      itemRemoved: false
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleCollectionId = this.handleCollectionId.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }


  componentDidMount() {
    window.scroll(0,0);
    this.props.fetchCollections();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({item: nextProps.item});
    this.setState({collections: nextProps.collections});

    this.setState({loaded: nextProps.loaded});
  }

  removeItem(e) {
    e.preventDefault();
    this.props.deleteItem(this.props.item.id).then(() => {
      
      this.props.closeModal();
      if (this.props.history.location.pathname !== '/') {
        this.props.history.push('/');
      }
    });
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }

  handleURL(e) {
    this.props.makeOpaque();
    this.setState({imageFile: e.target.value});
    this.setState({imageUrl: e.target.value});
  }

  handleCollectionId(e) {
    this.setState({collection_id: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result });
      this.props.makeOpaque();
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

    if (this.props.loaded) {
      this.props.submitAction(formData).then(() => {
         this.props.closeModal();
      });
    }
  }

  render() {
    let image;
    let header;
    let deleteBtn;
    const { formType, errors } = this.props;


    if (formType === 'create') {
      if (this.state.imageFile) {
        image = (
          <div className="form-img-holder">
            <img className="item-img" src={this.state.imageUrl}></img>
          </div>
        );
      } else {
        image = (
          <div className="form-img-holder">
            <div className="form-img-input">
              <input type="file" onChange={this.handleFile} />
              <img className="item-img" src={this.state.imageUrl} />
              <p>or upload via url:</p>
              <textarea placeholder="url" type="text" onChange={this.handleURL}/>
            </div>
          </div>
        );
      }

      deleteBtn = '';

      header = ( <p className="form-header">Create an Item</p> );

    } else {
      image = (
        <div className="form-img-holder">
          <img className="item-img" src={this.props.item.image}></img>
        </div>
      );
      header = <p className="form-header">{formType !== 'collect' ? 'Edit this item' : 'Save'}</p>;
      deleteBtn = <button className="delete-item-btn" onClick={this.removeItem}>Delete</button>;
    }

    if (this.props.collections[0]) {


      const { collections, loaded } = this.props;

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

      let classOpaque;
      if (this.props.loaded === 'true' || this.props.formType !== 'create') {
        classOpaque = 'turn-opaque';
      } else {
        classOpaque = 'be-translucent';
      }

      return (

        <div className="create-item-background">
          <div className="create-item-container">
            <h1>{ header }</h1>
            <form onSubmit={this.handleSubmit}>
              { image }
              <textarea
                placeholder="Description..."
                className="form-item-description"
                value={this.state.description}
                onChange={this.handleDescription} />
              { deleteBtn }
              <div className="collections-list-container">
                <p className="collection-list-header">Choose a Collection</p>
                <ul className={`collections-list ${classOpaque}`}>
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

export default withRouter(ItemForm);
