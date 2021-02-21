import React, { Component } from 'react';
import SideNav from './sideNav';
import UserDash from './userDashboard';
import './css/Container.css'

class Container extends Component {
    render(){
        return (
            <div className="row">
                <div className="column left"><SideNav/></div>
                <div className="column right"><UserDash/></div>   
            </div> 
        )
    }
}

export default Container