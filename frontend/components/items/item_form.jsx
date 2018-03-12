import React from 'react';
import { Redirect } from 'react-router-dom';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item.description,
      collection_id: '',
      imageFile: null,
      imageUrl: null
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleCid = this.handleCid.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id);
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({item: nextProps.item});
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
  }
  handleCid(e) {
    this.setState({collection_id: e.target.value});
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
    this.setState({collection_id: e.target.key});

    const formData = new FormData();

    formData.append("item[description]", this.state.description);
    formData.append("item[image]", this.state.imageFile);
    formData.append("item[collection_id]", this.state.collection_id);
    if (this.props.formType !== 'create') {
      formData.append("item[itemId]", this.props.item.id);
    }

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
            <input type="file" onChange={this.handleFile} />
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

    if (this.props.collections) {
      debugger

      const { collections } = this.props;

      const collectionsList = Object.values(collections).map(collection => {
        return (
          <button
            onClick={this.handleCid}
            key={collection.id}
            value={collection.id}>
            <p className="collection-title">{collection.title}</p>
            <img className="collect-btn" src={window.collect}></img>
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
        <p>Loading</p>
      );
    }
  }
}

export default ItemForm;
