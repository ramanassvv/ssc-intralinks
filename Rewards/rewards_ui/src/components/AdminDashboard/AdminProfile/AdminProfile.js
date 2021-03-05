import React from 'react';

import './AdminProfile.css';


class AdminProfile extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(

            <div>
                <div className="jumbotron AdminProfile">    
                    <div className="center">       
                        <img className="" src={require('../../../images/admin.jpg')}/>
                        <p>@ {this.props.loginDispatchReducer.user.emp_name}</p>
                    </div>
                </div>

            </div>

        )
    }

}

export default AdminProfile