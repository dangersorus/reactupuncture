import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <NotAuthenticated>
            This is the starting project using React and Stormpath for Reactupuncture.<br/>
            Please <LoginLink />.
              </NotAuthenticated>
          </p>
        </div>
      </div>
            );
    }
}



