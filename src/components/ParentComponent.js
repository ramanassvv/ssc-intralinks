import React,{Component} from 'react'
import ChildComponent from './ChildComponent'



 //-----------------------------//methods as a props  -----------------------//


class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }
        this.geertParent=this.geertParent.bind(this)
    }
    geertParent(){
        alert(`Hello ${this.state.parentName}`)
    }
render(){
        
    return (
        <div>
            <ChildComponent greetHandler={this.geertParent}/> 
        </div>
    )
}

}

export default ParentComponent;