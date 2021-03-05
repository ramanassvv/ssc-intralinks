import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Profile  from '../Profile/Profile'
import { Route,Switch,NavLink,Link} from 'react-router-dom'

import SendKudos   from '../Kudos/SendKudos'

import './EmployeeDashboard.css'
import ReceivedKudos from '../Kudos/ReceivedKudos';
import SOM from '../StarOfMonth/SOM';
import SOQ from '../StarOfQuarter/SOQ';
import {Redirect} from 'react-router-dom';


class EmployeeDashboard extends React.Component{
    constructor(props){
    super(props)

    }
    render(){
        const {auth}=this.props;
        return(
            <div className="container">
            <div className="row bg1-ED">
                <div className="col-md-3 bg-ED">
                    <div className="list-group">
                        <Link className="list-group-item" to="/EmployeeDashboard">Profile</Link>
                        <Link className="list-group-item" to="/EmployeeDashboard/SendKudos">Send Kudos</Link>
                        <Link className="list-group-item" to="/EmployeeDashboard/ReceivedKudos">Received Kudos</Link>
                        <Link className="list-group-item" to="/EmployeeDashboard/StarOfTheMonth">Star of the Month</Link>
                        <Link className="list-group-item" to="/EmployeeDashboard/StarOfTheQuarter">Star of the Quarter</Link>
                        {/* <a href="#" className="list-group-item">Profile <span className="badge">12</span></a> */}
                        {/* <a href="#" className="list-group-item">Send Kudos<span className="badge">12</span></a> */}
                        {/* <a href="#" className="list-group-item">Received Kudos <span className="badge">12</span></a> */}
                        {/* <a href="#" className="list-group-item">Star of the Month <span className="badge">12</span></a> */}
                        {/* <a href="#" className="list-group-item">Star of the Quarter <span className="badge">12</span></a>    */}
                    </div>
                </div>
                
                <div className="col-md-9 bg-ED">


                <Switch>

                    <Route exact path="/EmployeeDashboard" render={() =>
                        <div>
                            <Profile {...this.props}></Profile>
                            {/* :<Redirect to ="/Error" />  */}
                        </div>
                        // :<Redirect to="/EmployeeDashboard"/>
                       
                       
                            
                       
                    }/>

                    <Route exact path="/EmployeeDashboard/SendKudos" render={() => (
                     <div>
                        <SendKudos {...this.props}></SendKudos> 
                     </div>
                        
                    )}/>

                    
                    {/* <Route exact path="/EmployeeDashboard/SendKudos" render={() => (
                        <div>
                             <SendKudos {...this.props}></SendKudos>
                        </div>
                    )}/>         */}
                    
                    <Route exact path="/EmployeeDashboard/ReceivedKudos" render={() => (
                        <div>
                            <ReceivedKudos {...this.props} />
                        </div>
                    )}/>

                    <Route exact path="/EmployeeDashboard/StarOfTheMonth"  render={() => (
                        <div>
                            <SOM {...this.props}></SOM>
                        </div>
                    )}/> 

                    <Route exact path="/EmployeeDashboard/StarOfTheQuarter"  render={() => (
                        <div>
                            <SOQ  {...this.props}></SOQ>
                        </div>
                    )}/>  
                                
                </Switch>

                </div>
               

                
                </div>
                </div>
        )
    }
  
}

export default EmployeeDashboard;
