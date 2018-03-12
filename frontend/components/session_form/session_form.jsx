import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ErrorsList from '../errors/errors_list';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    this.setState({ email: 'rweir11', password: 'starwars11' });
    this.props.submitAction(this.state);
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
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        { <ErrorsList errors={ this.props.errors } /> ? this.props.errors.length > 0 : null }
        <div className="login-link-container">
          { this.props.formType === 'signup' ? <Link to='/login' className="login-link">Log in</Link> : <p></p>}
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
            <button onClick={this.handleDemo}>Demo Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
