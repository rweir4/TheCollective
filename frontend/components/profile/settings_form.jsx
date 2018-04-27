import React from 'react';
import Loading from '../loading';
import ErrorsList from '../errors/errors_list';
import NavBarContainer from '../navBar/nav_bar_container';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      email: undefined,
      imageFile: undefined,
      imageUrl: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.user.id === undefined) {
      this.props.fetchUser(this.props.currentUserId).then(userInfo => {
        const user = userInfo.user;
        this.setState({
          user,
          email: user.email,
          imageFile: user.imageFile,
          imageUrl: user.imageUrl
        });
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.state.user.image !== newProps.image) {
      this.setState({
        user: newProps.user,
        email: newProps.user.email,
        imageFile: newProps.user.imageFile,
        imageUrl: newProps.user.imageUrl});
    }
  }

  handleChange(field) {
    return e => {
      return this.setState({[field]: e.target.value});
    };
  }

  handleRemove(e) {
    e.preventDefault();

    this.props.deleteUser(this.props.user.id).then(() => {
      this.props.history.push('/signup');
    });
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
    formData.append("user[email]", this.state.email);
    formData.append("user[image]", this.state.imageFile);
    formData.append("user[collection_ids]", this.state.user.collection_ids);
    formData.append("user[item_ids]", this.state.user.item_ids);
    formData.append("user[follows]", this.state.user.follows);
    formData.append("user[followers]", this.state.user.followers);
    formData.append("user[userId]", this.state.user.id);

    this.props.updateUser(formData);
  }

  render() {
    if (this.state.user.id) {
      const { user, email } = this.state;

      let preview;
      if (this.state.imageUrl !== user.imageUrl) {
        const { imageUrl } = this.state;
        preview = ( <img className="settings-profile-img" src={imageUrl} /> );
      } else {
        preview = null;
      }

      return (
        <div>
          <NavBarContainer />
          <form className="settings-form" onSubmit={this.handleSubmit}>
            <h1>Account Settings</h1>
            <label>Email
              <input
                className="email-setting"
                onChange={this.handleChange('email')}
                value={email} />
            </label>
            <img className="settings-profile-img" src={user.image} />
            <label>Change Profile Picture
              <input type="file" onChange={this.handleFile} />
            </label>
            { preview }
            <button onClick={this.handleSubmit}>Save Settings</button>
            <button onClick={this.handleRemove}>Delete</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <NavBarContainer />
          <Loading />
        </div>
      );
    }
  }
}

export default SettingsForm;
