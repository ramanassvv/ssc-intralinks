import React from 'react';
import { Route} from 'react-router-dom';
import { sessionService } from 'redux-react-session';

import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import LeaderDashboard from './components/LeaderDashboard/LeaderDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import requireAuth from './utils/requireAuth';

class Main extends React.Component{
    render(){    
        
        return(
        <div>
                <Navbar {...this.props}/>
                <Route exact path="/" render={() => (
                <div>
                      <Login {...this.props}></Login>
                </div>

            )}/>
                <div className="containe-fluid">
                
                <Route path="/EmployeeDashboard"  render={() =>this.props.loginDispatchReducer.isAuthenticated==true
                    ?<div> 
                        <EmployeeDashboard {...this.props} ></EmployeeDashboard>
                    </div>
                    :<Redirect to='/'/>
                }/>
                </div> 


                {/* <Route path="/EmployeeDashboard" component={EmployeeDashboard}/> */}
                 


                <div className="containe-fluid">
                
                <Route path="/LeaderDashboard"   render={() => this.props.loginDispatchReducer.isAuthenticated==true
                ?<div>
                      <LeaderDashboard {...this.props}></LeaderDashboard>
                </div>
                :<Redirect to='/'/>

            }/>
                </div>  


                <div className="containe-fluid">
                
                <Route path="/AdminDashboard" render={() => this.props.loginDispatchReducer.isAuthenticated==true
                ?<div>
                      <AdminDashboard {...this.props}></AdminDashboard>
                </div>
                :<Redirect to='/'/>

            }/>
                {/* <Route path="/AdminDashboard" component={AdminDashboard ,{...this.props}} /> */}
                </div>


                  

                <div className="footer">
                    <p>Copyright © 2020, Made by Soniya,Ramana & Gourav</p>
                </div>
                </div>  
            
        
        )
        }
}

function mapStateToProps(state) {
    return {
      auth: state.auth
    }
  }

export default connect(mapStateToProps)(Main);

// export default Main;