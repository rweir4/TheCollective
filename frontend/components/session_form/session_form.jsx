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
    this.state = {email: '', password: ''};
  }

  render() {
    return (
      <div className="session-form-container">
        <p className="session-form-header">
          {this.props.formType === 'signup' ? 'Welcome to The Collective' : 'Log in to see more'}
        </p>
        {this.props.formType === 'signup' ? <p className="signup-subheader">Find new ideas to try</p> : null }
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="input-box">
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}/>
          <input
            type="password"
            placeholder={this.props.formType === 'signup' ? 'Create a password' : 'Password'}
            value={this.state.password}
            onChange={this.handleChange('password')}/>
          </div>
          <button className="session-btn">{this.props.formType === 'signup' ? 'Continue' : 'Log in'}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
