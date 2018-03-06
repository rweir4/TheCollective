import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

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
  }

  render() {
    return (
      <div>
        <h1 className="session-form-container">
          {this.props.formType === 'signup' ? 'Sign Up!' : 'Log in!'}
        </h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}/>
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}/>
          </label>
          <button className="session-btn">{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
