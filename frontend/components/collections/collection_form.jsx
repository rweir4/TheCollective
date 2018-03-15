import React from 'react';
import { Redirect } from 'react-router-dom';

class CollectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.collection;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
    this.props.closeModal();
  }

  render() {


    if (this.props.collection) {
      const { collection } = this.props.collection;

      let description;
      let header;
      let deleteCollection;

      if (this.props.formType === 'create') {
        header = <p className="form-header">Add a Collection</p>
        deleteCollection = null;
        description = null;
      } else {
        header = <p className="form-header">Edit</p>
        deleteCollection = <button onClick={() => this.props.deleteCollection(collection.id)}>Delete</button>
        description = (
          <label>Description
            <textarea
              placeholder="What is your collection about?"
              className = "form-collection-description"
              value={this.state.description}
              onChange={this.handleChange('description')} />
          </label>
        );
      }

      return (
        <div className="create-collection-background">
          <h1>{ header }</h1>
          <div className="create-collection-container">
            <form onSubmit={this.handleSubmit}>
              <label>Name
                <input
                  className="title-input"
                  placeholder='Like "Places to go" or "Recipes to Make"'
                  value={this.state.title}
                  onChange={this.handleChange('title')}/>
              </label>
              { description }
              <button>Save</button>
            </form>
            { deleteCollection }
            <button onClick={() => this.props.closeModal()}>Cancel</button>
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

export default CollectionForm;
