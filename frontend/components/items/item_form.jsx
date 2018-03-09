import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;

    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return ({
      body: "",
      imageFile: null,
      imageUrl: null
    });
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.item);
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
    const formData = new FormData();
    formData.append("item[description]", this.state.description);
    formData.append("item[image], this.state.imageFile");
    e.preventDefault();
    this.setState({collection_id: e.target.key});
    this.props.submitAction(this.state);
  }

  render() {
    let image;
    if (this.props.formType === 'create') {
      image = <div><input type="file" onChange={this.handleFile} /><img src={this.state.imageUrl} /></div>
    } else {
      image = <img className="item-img" src={this.props.item.image}></img>;
    }

    if (this.props.currentUser) {
      const { collections } = this.props;
      const collectionsList = Object.values(collections).map(collection => {
        return ( <button onClick={this.handleSubmit} key={collection.id}>{collection.title}</button> )
      });

      return (
        <div>
          <h1>Add a Pin!</h1>
          <div className="img-holder">
            { image }
          </div>
          <form>
            <textarea
              value={this.state.description}
              onChange={this.handleDescription} />
            <ul>
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
