import React from 'react';
import './navbar.css';


class Navbar extends React.Component{

    logout(e) {
        e.preventDefault();
        console.log('logout called')
        this.props.logout()
        
        this.props.history.push(`/`)
        
        
        // .then(res=>{
        //     console.log('logged out')
        //     this.props.history.push(`/`)
        // },(err)=>{
        //     console.log(err);
        // }
        // )
    }

render(){
    
    const  isAuthenticated  = this.props.loginDispatchReducer.isAuthenticated;
    return(
    <div>
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>    
                    <img src={require('../../images/logo1.jpg')} alt="intralinks_logo"/>  
                    <a href="#" className=" nav1 navbar-brand">Rewards & Recognitions</a>   
                </div>
               

                <div className="collapse navbar-collapse" id="myNavbar">
                
                <ul className="nav navbar-nav navbar-right">
                    
                    {
                        isAuthenticated ?<li><button  className="btn1 btn noHover ">Welcome, {this.props.loginDispatchReducer.user.emp_name.charAt(0).toUpperCase() + this.props.loginDispatchReducer.user.emp_name.slice(1)}</button></li>:''
                    }
                    {
                        isAuthenticated ?<li ><button className="btn btn-success" onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out" ></span> Logout</button></li> :''
                    }   
                    <li><button className="btn btn-success"><span className="glyphicon glyphicon-user" ></span> Contact Us</button></li>
                </ul>
                {/* <button className="btn btn-danger navbar-btn pull-right">Contact Us</button> */ }
            </div>
            </div>
        </nav>
    </div>
    )
}

}

export default Navbar;
