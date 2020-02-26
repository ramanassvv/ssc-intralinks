import React,{Component} from 'react'
class EventBind extends Component{
    constructor (props){
        super(props)
        this.state={
            message:'hello'
        }
    }
    clickhandler(){
        this.setState({
            message:'good bye!'
        })
        //console.log(this)
    }
render(){        
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickhandler.bind(this)}>clickme</button>  */}
          
          
          {/* //arrow function */}
          <button onClick={()=>this.clickhandler()}>click me </button> 
          
      </div>
    )}
}

export default EventBind;