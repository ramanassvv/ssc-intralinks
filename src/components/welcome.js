import React,{Component} from 'react'
class welcome extends Component{
render(){
    const {surname,name}=this.props        
    return (
        // <h1>
        // welcome {this.props.surname}  {this.props.name}
        // </h1>


        //destructuring in class components
        <h1>   welcome {surname}  {name}  </h1>
    )
}

}

export default welcome;