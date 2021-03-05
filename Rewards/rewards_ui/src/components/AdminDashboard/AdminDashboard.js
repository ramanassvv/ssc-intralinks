import React from 'react';
import { Route,Switch,Link} from 'react-router-dom'
import  AdminProfile  from './AdminProfile/AdminProfile'

class AdminDashboard extends React.Component{
    render(){
        return(
        // <div>
        //     {/* <h1>Welcome to Admin Dashboard</h1> */}

        // </div>   
        <div className="container">
        <div className="row bg1-ED">
            <div className="col-md-3 bg-ED">
                <div className="list-group">
                    <Link className="list-group-item" to="/AdminDashboard">Profile</Link>
                    <Link className="list-group-item" to="/AdminDashboard/SendKudos">Send Kudos</Link>
                    <Link className="list-group-item" to="/AdminDashboard/ReceivedKudos">Received Kudos</Link>
                    <Link className="list-group-item" to="/AdminDashboard/AdminStarOfTheMonth">Star of the Month</Link>
                    <Link className="list-group-item" to="/AdminDashboard/AdminStarOfTheQuarter">Star of the Quarter</Link>
                </div>
            </div>
            
            <div className="col-md-9 bg-ED">
                <Switch>

                    <Route exact path="/AdminDashboard" render={() => (
                        <div>
                            <AdminProfile {...this.props}></AdminProfile>
                        </div>
                    )}/>

                    {/* <Route exact path="/AdminDashboard/SendKudos" render={() => (
                        <div>
                            <SendKudos {...this.props}></SendKudos>
                        </div>
                    )}/>

                    <Route exact path="/AdminDashboard/ReceivedKudos" render={() => (
                        <div>
                            <ReceivedKudos {...this.props}></ReceivedKudos>
                        </div>
                    )}/>

                    <Route exact path="/AdminDashboard/LeaderStarOfTheMonth" render={() => (
                        <div>
                            <LeaderSOM {...this.props}></LeaderSOM>
                        </div>
                    )}/> 

                    <Route exact path="/AdminrDashboard/LeaderStarOfTheQuarter" render={() => (
                        <div>
                            <LeaderSOQ {...this.props}></LeaderSOQ>
                        </div>
                    )}/>  
                                 */}
                </Switch>
            </div>
        </div>
    </div>
        
        )
    }
  
}

export default AdminDashboard;
