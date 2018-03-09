import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import UserShowContainer from './user/user_show_container';
import ItemIndexContainer from './items/item_index_container';
import NavBarContainer from './navBar/nav_bar_container';
import ItemShowContainer from './items/item_show_container';
import CollectionIndexContainer from './collections/collection_index_container';
import CollectionShowContainer from './collections/collection_show_container';
import EditItemContainer from './items/item_edit_container';

const App = () => {
  return (
    <div>
      <ProtectedRoute path="/" component={ NavBarContainer } />
      <Switch>
        <AuthRoute exact path="/signup" component={ SignupFormContainer }/>
        <AuthRoute exact path="/login" component={ LoginFormContainer }/>
        <ProtectedRoute exact path="/" component={ ItemIndexContainer } />
        <ProtectedRoute exact path="/items/:itemId" component={ ItemShowContainer } />
        <ProtectedRoute exact path="/collections" component={ CollectionIndexContainer } />
        <ProtectedRoute exact path="/collections/:collectionId" component={ CollectionShowContainer } />
        <ProtectedRoute exact path="/collections/:collectionId/edit" component={ EditItemContainer } />
      </Switch>
    </div>
  );
};

export default App;
