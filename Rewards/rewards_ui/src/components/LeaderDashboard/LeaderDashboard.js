import React from 'react';


import LeaderProfile  from './LeaderProfile/LeaderProfile'
import { Route,Switch,Link, Redirect} from 'react-router-dom'

import './LeaderDashboard.css'

import SendKudos   from '../Kudos/SendKudos'
import ReceivedKudos from '../Kudos/ReceivedKudos';
import LeaderSOM from './LeaderSOM/LeaderSOM';
import LeaderSOQ from './LeaderSOQ/LeaderSOQ';

class LeaderDashboard extends React.Component{
    constructor(props){
        super(props)
        }
        render(){
            
            return(
                <div className="container">
                    <div className="row bg1-ED">
                        <div className="col-md-3 bg-ED">
                            <div className="list-group">
                                <Link className="list-group-item" to="/LeaderDashboard">Profile</Link>
                                <Link className="list-group-item" to="/LeaderDashboard/SendKudos">Send Kudos</Link>
                                <Link className="list-group-item" to="/LeaderDashboard/ReceivedKudos">Received Kudos</Link>
                                <Link className="list-group-item" to="/LeaderDashboard/LeaderStarOfTheMonth">Star of the Month</Link>
                                <Link className="list-group-item" to="/LeaderDashboard/LeaderStarOfTheQuarter">Star of the Quarter</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-9 bg-ED">
                            <Switch>
            
                                <Route exact path="/LeaderDashboard" render={() => (
                                    <div>
                                        <LeaderProfile {...this.props}></LeaderProfile>
                                    </div>
                                )}/>
            
                                <Route exact path="/LeaderDashboard/SendKudos" render={() => (
                                    <div>
                                        <SendKudos {...this.props}></SendKudos>
                                    </div>
                                
                                )}/>
            
                                <Route exact path="/LeaderDashboard/ReceivedKudos" render={() => (
                                    <div>
                                        <ReceivedKudos {...this.props}></ReceivedKudos>
                                    </div>
                                )}/>
            
                                <Route exact path="/LeaderDashboard/LeaderStarOfTheMonth" render={() => (
                                    <div>
                                        <LeaderSOM {...this.props}></LeaderSOM>
                                    </div>
                                )}/> 
            
                                <Route exact path="/LeaderDashboard/LeaderStarOfTheQuarter" render={() => (
                                    <div>
                                        <LeaderSOQ {...this.props}></LeaderSOQ>
                                    </div>
                                )}/>  
                                            
                            </Switch>
                        </div>
                    </div>
                </div>
            )
        }
      
    }

export default LeaderDashboard;
