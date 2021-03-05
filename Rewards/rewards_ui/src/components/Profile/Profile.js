import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';

import './Profile.css';

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log('##########',props)
        this.state={
            teamMembers:[],
            employeeInfo:[],
          
            
        }


        this.employeeInfo=this.employeeInfo.bind(this);
        this.teamMembers=this.teamMembers.bind(this);
    }

    componentDidMount(){

        this.teamMembers();
        this.employeeInfo();
       
 
     }

     teamMembers(){
        // window.localStorage.reload(true);
        axios.get('/rewards/team-members/'+this.props.loginDispatchReducer.user.dept_no).then(res=>{
            console.log('Team Members')
            console.log(res.data);
           // localStorage.setItem('session',JSON.stringify(res.data));
    
            this.setState({teamMembers:res.data})
            
        }).catch(err=>{
            console.log(err)
            console.log("Team members list receiving failed!!")
        })
    }



    employeeInfo(){
        axios.get('/rewards/employee-info/'+this.props.loginDispatchReducer.user.emp_id).then(res=>{
            console.log('Employee Information')
            console.log(res.data);
           // localStorage.setItem('token',res.data.token);
            this.setState({employeeInfo:res.data,})
           

        }).catch(err=>{
            console.log(err)
            console.log("Employee info receiving failed!!")
        })
    }
    
    render(){       
        return(
            <div>
            <div className="jumbotron prof">    
                 <div className="center">       
                <img className="" src={require('../../images/profile.png')}/>
                <p>@ {this.props.loginDispatchReducer.user.emp_name}</p>
                <h5>Associate Software Engineer</h5>
                </div>
            </div>
                
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#statistics">Statistics</a></li>
                <li><a data-toggle="tab" href="#profile">Profile</a></li>
                <li><a data-toggle="tab" href="#teammembers">Team Members</a></li>
                <li><a data-toggle="tab" href="#latestpost">Latest Post</a></li>
            </ul>

            <div className="tab-content">
                <div id="statistics" className="tab-pane fade in active">
               

                <div className="col-md-4 col-sm-6">
                    <div className="card text-center">
                        
                            <div className="row">
                                <div className="col-md-6 col-xs-6 text-center">
                                    <i className="fa fa-star iconPoints"></i>
                                </div>
                                <div className="col-md-6 col-xs-6 text-center">
                                    <h4>Points<br/> 100</h4>
                                    
                                </div>    
                            </div>

                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="card text-center">
                        
                            <div className="row">
                                <div className="col-md-6 col-xs-6 text-center">
                                    <i className="fa fa-handshake-o  iconKudosCount"></i>
                                </div>
                                <div className="col-md-6 col-xs-6 text-center">
                                    <h4>Kudos Count<br/>7</h4>
                                    
                                </div>    
                            </div>

                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="card text-center">
                        
                            <div className="row">
                                <div className="col-md-6 col-xs-6 text-center">
                                    <i className="fa fa-trophy iconTitles"></i>
                                </div>
                                <div className="col-md-6 col-xs-6 text-center">
                                    <h4>Titles won<br/>2</h4>
                                    
                                </div>    
                            </div>

                    </div>
                </div>
                
                
                
                </div>



                <div id="profile" className="tab-pane fade">
               

                   
                        <div className="jumbotron profileJumbo">

                                        <h2>{this.props.loginDispatchReducer.user.emp_name.charAt(0).toUpperCase() + this.props.loginDispatchReducer.user.emp_name.slice(1)}</h2>

                                        <br/>
                                        <p><b>Employee ID: </b>{this.props.loginDispatchReducer.user.emp_id}</p>
                                        {this.state.employeeInfo.map((value,i)=>{
                                        return <div key={i}>
                                        
                                                <p><b>Email: </b>abc@intralinks.com</p>
                                                <p><b>Phone: </b> 1234567890</p>
                                                <p><b>Department: </b>{value.department}</p>
                                                <p><b>Manager: </b> {value.manager_name.charAt(0).toUpperCase()+value.manager_name.slice(1)}</p>
                                                <p><b>Manager ID: </b> {value.manager_id}</p>
                                            </div>
                                        })}        
                        </div>
                </div>


                <div id="teammembers" className="tab-pane fade">
                                    <h3>Department: {this.props.loginDispatchReducer.user.dept_no}</h3><br/>
                <table className="table table-hover table-striped">
                    <thead>
                    <tr  className="success">
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    </thead>
                    <tbody>
                            {this.state.teamMembers.map((value,i)=>{
                                        return <tr key={i}>
                                <td>{value.emp_id}</td>
                                <td>{value.emp_name}</td>
                                <td>XXXXX</td>
                            </tr>
                            })}
                    </tbody>
                </table>

                </div>
                <div id="latestpost" className="tab-pane fade">
                <h3>No latest post yet.</h3>
                
                </div>
            </div>
    
    
            </div>   
        
        )
    }
  
}

export default Profile;
