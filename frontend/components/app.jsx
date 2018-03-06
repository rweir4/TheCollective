import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => {
  return (
    <div>
      <SignupFormContainer />
    </div>
  );
};

export default App;
