import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import './SendKudos.css';
import {Redirect} from 'react-router-dom';
//const { auth } = require('google-auth-library');


class SendKudos extends React.Component{
    constructor(props){
        super(props);

        this.state={
            to_id:'',
           comments:'',      
        }

        this.onChange=this.onChange.bind(this);
        this.submitKudos=this.submitKudos.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitKudos(e){
        e.preventDefault();
        if(this.state.to_id===""){
            alert("Please fill the Employeed ID")
        }
        else if(this.state.comments===""){
                alert("Comments required")
        }
        else{
            const kudos={
                from_id:this.props.loginDispatchReducer.user.emp_id,
                to_id:this.state.to_id,
                comments:this.state.comments
            }
        
        
        axios.post('/rewards/kudos',kudos).then(res=>{
            console.log(res.data)
            console.log("Kudos Sent!!")
            swal("Good Job!", "Kudos Sent!", "success")
            this.setState({
                to_id: '',
                comments:''
              });
        }).catch(err=>{
            console.log(err)
            console.log("Kudos submission failed!!")
        })
    }
    }



    render(){
        // const {auth}=this.props;
        // if(!auth) return <Redirect to="/Error"/>
        return(
            <div>
                <div className="jumbotron sk">       
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="panel panel-info" >
                            <div className="panel-heading">
                                <div className="panel-title"><p>Appreciate your collegues <i className="fa fa-handshake-o icon" aria-hidden="true"></i></p></div>
                            </div> 
                            <div className="panel-body">
                            <form id="loginform" className="form-horizontal" role="form">
                                    
                                    <div style={{marginBottom: '25px'}} className="input-group" >
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                                <input  type="text" className="form-control" name="to_id" onChange={this.onChange}  value={this.state.to_id} placeholder="Employee ID" required="required" />                                        
                                            </div>
                                        
                                    <div style={{marginBottom: '25px'}} className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-commenting" aria-hidden="true"></i></span>
                                                <textarea className="form-control" rows="5" name="comments" onChange={this.onChange} placeholder="Comments" value={this.state.comments}></textarea>
                                                {/* <input id="comments" type="text" className="form-control" name="comments" placeholder="Comments"/> */}
                                    </div>
                                            
                                    <div style={{marginTop:'10px'}} className="form-group">
                                   

                                    <div className="col-sm-12 controls">
                                      <button value="send" className="btn btn-success" onClick={this.submitKudos} >Send <i className="fa fa-paper-plane"></i></button>
                                     

                                    </div>
                                </div>
                              </form>     
        
                            </div>

                        </div>
                                        


                    </div>

                </div>
            </div>

        )
}
}

export default SendKudos;