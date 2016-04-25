import React from 'react';

export default class PatientsList extends React.Component {
    render() {
        return (
            <ul>
          {this.props.list.map(function(listValue) {
                return <li key={listValue} data={listValue}>{listValue}</li>;
            })}
        </ul>
        )
    }
}
