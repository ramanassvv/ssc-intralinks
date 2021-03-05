import React from 'react';
import './login.css'
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
const { auth } = require('google-auth-library');

//import { login } from '../userFunctions'
//import { login } from '../../redux/actions'

class Login extends React.Component{
    constructor(props){
        super(props);
        //console.log('initial set of props......',props)
        this.state={
                 emp_id:'',
                emp_name:'',
                role_no:'',
                dept_no:'',
                user_details:[]
            
    }

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
            
        
    }

    onSubmit(e){
        e.preventDefault();
       // console.log(this.state);
       
        // localStorage.setItem('document',JSON.stringify(this.state));
        const user={
            emp_id:this.state.emp_id
        }
        this.props.login(user).then(res=>{   
            
            console.log('@@@@@@@@@@@@@@@@@@@@@',this.props.loginDispatchReducer)
           //this.setState({user_details:this.props.loginDispatchReducer})
           
           console.log('user_details',this.props.loginDispatchReducer.user)
            if(this.props.loginDispatchReducer.isAuthenticated){
                const who=this.props.loginDispatchReducer.user.role_no;
                console.log('Login Successfull',this.state.dept_no)
                if(who==1){
                    // localStorage.setItem("loginDispatchReducer",JSON.stringify(this.props.loginDispatchReducer))
                    // console.log(localStorage);
                    this.props.history.push(`/EmployeeDashboard`)
                }
                else if(who==2){
                    //  localStorage.setItem("loginDispatchReducer",JSON.stringify(this.props.loginDispatchReducer))
                    //  console.log(localStorage);
                    this.props.history.push(`/LeaderDashboard`)
                }
               
                else{
                    // localStorage.setItem("loginDispatchReducer",JSON.stringify(this.props.loginDispatchReducer))
                  
                    // console.log(localStorage);
                    this.props.history.push(`/AdminDashboard`)
                }
             
                    
            }else{
                //this.setState({dept_no:this.props.loginDispatchReducer.dept_no})
                console.log("Wrong Email ID")
            }
        },(err)=>{
            console.log(err);
        }
        )
        // console.log(this.state.emp_id);
        // login(user).then(res=>{
        //     if(res){
        //         this.props.history.push(`/dashboard`);
        //     }
        // })
}
    render(){
        // const {auth}=this.props;
        // if(!auth) return <Redirect to='/Error'/>
        return(
            <div className="bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-form">    
                                <form onSubmit={this.onSubmit}>  
                                    <img className="avatar img-fluid" src={require("../../images/avatar.jpg")} alt="avatar"/>
                                    <h4 className="modal-title">Login to Your Account</h4>
                                    <div className="form-group">
                                        <input type="text"  value={this.state.emp_id} onChange={this.onChange} name="emp_id" className="form-control" placeholder="Employee ID" required="required"/>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"/>              
                                </form>			   
                            </div>
                        </div>
                        <div className="col-md-6">
                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}

// Login.propTypes = {
//     login: PropTypes.func.isRequired
// }

//export default Login;
//export default connect(null,{login})(Login);

export default withRouter(Login)