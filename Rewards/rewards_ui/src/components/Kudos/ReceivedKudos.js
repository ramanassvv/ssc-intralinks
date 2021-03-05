import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import axios from 'axios';

//import swal from 'sweetalert';
import {Redirect} from 'react-router-dom';

import './ReceivedKudos.css';


class ReceivedKudos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            kudos:[],
            teamkudos:[],
            loginDispatchReducer:JSON.parse(localStorage.getItem("loginDispatchReducer"))
            
        }
        // const id=this.props.loginDispatchReducer.user.emp_id;
        this.kudosReceived=this.kudosReceived.bind(this);
        this.teamkudosReceived=this.teamkudosReceived.bind(this);
    }

   

    componentDidMount(){

       this.kudosReceived();
       this.teamkudosReceived();

    }

    kudosReceived(){
        axios.get('/rewards/kudos-received/'+this.state.loginDispatchReducer.user.emp_id).then(res=>{
            console.log('My kudos')
            console.log(res.data)
            this.setState({kudos:res.data})
        }).catch(err=>{
            console.log(err)
            console.log("Kudos receiving failed!!")
        })        
    }

    teamkudosReceived(){
        axios.get('/rewards/kudos-list/'+this.state.loginDispatchReducer.user.dept_no+'/'+this.state.loginDispatchReducer.user.emp_id).then(res=>{
            console.log('Team kudos')
            console.log(res.data);
            this.setState({teamkudos:res.data})
        }).catch(err=>{
            console.log(err)
            console.log("Team Kudos receiving failed!!")
        })
    }


    render(){
        // const {auth}=this.props;
        // if(!auth) return <Redirect to="/Error"/>
        return(
            <div>
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">My Kudos</a></li>
                    <li><a data-toggle="tab" href="#menu1">Team Members Kudos</a></li>
                
                </ul>

                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                    
                        <div className="container-fluid">
                            {/* <img className="img-responsive abc" src={require("../../images/ribbon.png")} alt="ribbon"/> */}
                            {this.state.kudos.map((value,i)=>{
                                return  <div className="col-md-4" key={i}>
                                <div className="panel panel-default" id='panel1'>
                        
                                <div className="panel-body">
                                    <div className="row text-left">
                                    <div >
                                        <i className="fa fa-star fa-2x pull-right" aria-hidden="true"></i>
                                    </div>
                                    <h3>{value.sender}</h3>
                                    <p>{value.comments}</p>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        })}
                        </div>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        
                        {this.state.teamkudos.map((value,i)=>{
                                return <div className="col-md-6" key={i}>
                            <div className="panel panel-success">
                                <div className="panel-heading panelHeadingHeight">
                                    <div className="row">
                                        <div className="col-md-4"> 
                                            <h4 className="panel-title">From: {value.sender}</h4>
                                        </div>
                                        <div className="col-md-3"> 
                                            <img className="img-responsive pic" src={require('../../images/clapping.gif')} alt="clapping"/>
                                        </div>
                                        <div className="col-md-5"> 
                                            <h4 className="panel-title" >Dept: {value.sender_dept}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body panelBodyHeight">
                                    <p>To: {value.receiver}</p>
                                    <p>{value.comments}</p>
                               </div>
         
                            </div>
                        </div>
                    })}

                       










                    </div>   
                </div>
            </div>
        )
    }
}

export default ReceivedKudos;