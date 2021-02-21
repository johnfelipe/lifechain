import React, { Component } from 'react';
import './css/UserDash.css'

class UserDash extends Component {
    render(){
        return (
            <div className="dashboard">
                <div className="patient-overview">
                    <div className="user-icon"></div>
                    <div className="patient-info">
                        <h5>Patient Information</h5>
                    </div>
                </div>

                    <div className="row-1">
                        <div className="col-3">Diagnosis History</div>
                        <div className="col-3">Medication History</div>
                        <div className="col-3">Contacts</div>
                    </div>
                    <div className="row-2">
                        <div className="col-3">Requisitions</div>
                        <div className="col-3">Medical Procedures</div>
                        <div className="col-3">Immunization</div>
                    </div>
            </div>
        )
    }
}

export default UserDash