import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;

    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    currentUser = this.props.fetchUser(currentUser.id);
  }

  handleDescription() {
    return (e) => {
      this.setState({description: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const collection = currentUser.collections[e.target.key];
    this.setState({collection_id: collection.id});
    this.props.submitAction(this.state);
  }

  render() {
    if (currentUser) {
      const collections = Object.values(this.props.currentUserCollections.collections).map(collection => {
        return ( <button onClick={this.handleSubmit} key={collection.title}>{collection.title}</button> )
      });

      return (
        <form>
          <textarea
            value={this.state.description}
            onChange={this.handleDescription}/>
        </form>
      );
    } else {
      <p>Loading</p>
    }
  }
}

export default ItemForm;
