import React from 'react';

import './LeaderProfile.css';


class LeaderProfile extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(

            <div>
                <div className="jumbotron leaderProfile">    
                    <div className="center">       
                        <img className="" src={require('../../../images/leader.jpg')}/>
                        <p>@ {this.props.loginDispatchReducer.user.emp_name}</p>
                    </div>
                </div>

            </div>

        )
    }

}

export default LeaderProfile