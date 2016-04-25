import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { MasterPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, PatientsPage } from './pages';

ReactStormpath.init();

ReactDOM.render(
    <Router history={createBrowserHistory()}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
      <AuthenticatedRoute>
        <Route path='/patients' component={PatientsPage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
    document.getElementById('app-container')
);
