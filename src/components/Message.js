import React,{Component} from 'react'
class Message extends Component{
    constructor(){                  //states
        super();
        this.state={
            message:'welcome visitor'
        }
    }
    changeMessage(){            //setStates
        this.setState({
            message:'thank you for subscribing'
        })
    }
render(){
   return( 
   <div>
       <h1>{this.state.message}</h1>
       <button onClick={()=>this.changeMessage()}>Subsricbe</button>
    </div>
   )
}

}

export default Message;