import React from 'react';

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogging:true
        }
    }
    render(){
    //     if(this.state.isLogging){
    //         return (
    //             <div>
    //                 Welcome to Intralinks
    //             </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div>
    //                 Welcome to eze
    //             </div>
    //         )
    //     }

    // }


    let message;
    if(this.state.isLogging){
        message=<div>welocme to Intralinks</div>
    }
    else{
        message=<div>welcome to eze</div>
    }
    return  <div>{ message}</div>
    }
}

export default UserGreeting;