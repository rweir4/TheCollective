import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ItemIndexContainer from './items/item_index_container';
import ItemShowContainer from './items/item_show_container';
import CollectionShowContainer from './collections/collection_show_container';
import ProfileContainer from './profile/profile_container';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path="/signup" component={ SignupFormContainer }/>
        <AuthRoute exact path="/login" component={ LoginFormContainer }/>
        <ProtectedRoute exact path="/" component={ ItemIndexContainer } />
        <ProtectedRoute exact path="/items/:itemId" component={ ItemShowContainer } />
        <ProtectedRoute exact path="/collections/:collectionId" component={ CollectionShowContainer } />
        <ProtectedRoute exact path="/profile/:userId" component={ ProfileContainer } />
      </Switch>
    </div>
  );
};

export default App;
