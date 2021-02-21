import React, { Component } from 'react';
import './css/SideNav.css'

class SideNav extends Component {
    render(){
        return (
            <div class="sidenav">
                <h5>LifeChain</h5>
                <button className="dash-button">Dashboard</button>
                <a href="#analytics">Analytics</a>
                <a href="#documents">Documents</a>
                <a href="#transactions">Transactions</a>
                <a href="#security">Security</a>
                <a href="#settings">Settings</a>
            </div>
        )
    }
}

export default SideNav

