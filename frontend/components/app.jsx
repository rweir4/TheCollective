import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserShowContainer from './user/user_show_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={ SignupFormContainer }/>
        <Route path="/" component={UserShowContainer} />
      </Switch>
    </div>
  );
};

export default App;
