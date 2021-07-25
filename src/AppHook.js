import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Account from './Features/Account';
import Login from './Features/Login';
import PrivateRoute from './Features/PrivateRoute';
// import UserRow from './UserRowHook';
import Footer from './Footer';
import Header from './Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <Switch>
          <PrivateRoute path="/account" exact>
            <Account />
          </PrivateRoute>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
