import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserShowContainer from './user/user_show_container';

const App = () => {
  return (
    <div>
      <LoginFormContainer />
      <Route path="api/user/:userId" component={UserShowContainer} />
    </div>
  );
};

export default App;
