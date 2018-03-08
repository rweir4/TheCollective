import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return (
      <div>Welcome {this.props.user.email}</div>
    );
  }
}

export default UserProfile;
