import React from 'react';
import { Redirect } from 'react-router-dom';

class CollectionForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.collection;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCollection(this.props.collection);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(formData);
    this.props.closeModal();
  }

  render() {


    if (this.props.collection) {
      const { collection } = this.props.collection;

      let header;
      let deleteCollection;
      if (this.props.formType === 'create') {
        header = <p className="form-header">Add a Collection</p>
        deleteCollection = null;
      } else {
        header = <p className="form-header">Edit</p>
        deleteCollection = <button onClick={() => this.props.deleteCollection(collection.id)}>Delete</button>
      }

      return (
        <div className="create-collection-background">
          <div className="create-collection-container">
            <h1>{ header }</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder=""
                value={this.state.title}
                onChange={this.handleChange('title')}/>
              <textarea
                className = "form-collection-title"
                value={this.state.description}
                onChange={this.handleChange('description')} />
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
