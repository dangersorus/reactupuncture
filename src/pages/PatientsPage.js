import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import PatientsList from './components/PatientsList';
export default class PatientsPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Patients</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
            <PatientsList list={[1, 2, 3, 4, 5]} />
            </div>
          </div>
        </div>
      </DocumentTitle>
            );
    }
}
