import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AddRestaurantForm from '../AddRestaurantForm';
import withAuthorization from '../Session/withAuthorization';

//import './index.css';

const AccountPage = ({ authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <AddRestaurantForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);