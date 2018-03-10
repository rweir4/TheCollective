import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item.description,
      collection_id: this.props.item.collection_id,
      imageFile: null,
      imageUrl: null
    };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({item: nextProps.item});
  }

  handleDescription(e) {
    this.setState({description: e.target.value});
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

    this.props.submitAction(formData);
  }

  render() {
    let image;
    let header;
    if (this.props.formType === 'create') {
      image = (
        <div>
          <input type="file" onChange={this.handleFile} />
          <div className="img-holder">
            <img className="item-img" src={this.state.imageUrl} />
          </div>
        </div>
      );
      header = "Add a Pin"
    } else {
      header = "Edit"
      image = <img className="item-img" src={this.props.item.image}></img>;
    }

    if (this.props.currentUser) {
      const { collections } = this.props;
      const collectionsList = Object.values(collections).map(collection => {
        return ( <button onClick={this.handleSubmit} key={collection.id}>{collection.title}</button> )
      });

      return (
        <div id="create-pin" className="item-container">
          <h1>{ header }</h1>
          <form>
            <div className="img-holder">
              { image }
            </div>
            <textarea
              className = "item-description"
              value={this.state.description}
              onChange={this.handleDescription} />
            <ul className="collections-list">
              { collectionsList }
            </ul>
          </form>
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
