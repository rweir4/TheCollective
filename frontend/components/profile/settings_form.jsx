import React from 'react';
import Loading from '../loading';
import ErrorsList from '../errors/errors_list';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.user === undefined) {
      this.props.fetchUser(this.props.currentUserId);
    }
  }

  handleChange(field) {
    return e => {
      return this.setState({[field]: e.target.value});
    };
  }

  handleRemove() {
    e.preventDefault();

    this.props.deleteUser(this.props.user.id).then(() => {
      this.props.history.push('/signup');
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.updateUser(this.state);
  }

  render() {
    if (this.props.user) {
      const { user } = this.props;

      return (
        <div>
          <h1>Account Settings</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Email:</label>
            <input
              placeholder={user.email}
              onChange={this.handleChange('email')}/>
            <img src={user.image} />
            <label>Change Profile Picture</label>
            <input type="file" onChange={this.handleFile} />
            <img className="settings-profile-img" src={this.state.imageUrl} />
            <button onClick={this.handleRemove}>Delete</button>
            <button onClick={this.handleSubmit}>Save Settings</button>
          </form>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

export default SettingsForm;
