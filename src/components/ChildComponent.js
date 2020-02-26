import React from 'react'

function ChildComponent(props){
    return(
        // <div>
        //     <button onClick={props.greetHandler}>geertParent</button>
        // </div>
        
        //using arrow functions
        <div>
            <button onClick={()=>props.greetHandler()}>greetParent</button>
        </div>
    )
}

export default ChildComponent;