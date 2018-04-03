import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ErrorsList from '../errors/errors_list';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state).then(this.props.history.push('/'));
    this.setState({email: '', password: ''});
  }

  demoLogin() {
    this.props.demoLogin();
    this.props.clearSessionErrors();
  }

  render() {
    const { clearSessionErrors } = this.props;

    return (
      <div>
        <div className="login-link-container">
          { this.props.formType === 'signup' ? <Link to='/login' onClick={() => clearSessionErrors()} className="login-link">Log in</Link> : <p></p>}
        </div>
        <div className="session-form-container">
          <img src={window.logo} id="session-logo" className="logo"/>
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
            <div className="signup-link-container">
              { this.props.formType === 'signup' ? null : <p>Not on The Collective yet?<Link to='/signup' className="signup-link">Sign Up</Link></p>}
            </div>
          </form>
          <button className="demo" onClick={this.demoLogin}>Demo Login</button>
          { this.props.errors[0] ? <ErrorsList errors={ this.props.errors } type="session-errors"/> : null }
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
