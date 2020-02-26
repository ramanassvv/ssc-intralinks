import React from 'react'
//  const Hello=({props})=>{        //using props and states
//       console.log(props)
//      return(
//          <div>
//              <h1>{props.name} and {props.surname}</h1>
//          </div>
//      )
//     // return React.createElement('div',null,React.createElement('hi',null,'hello'))
//  }
 

//  const Hello=({name,surname})=>{        //using destructures
//       //console.log(props)
//      return(
//          <div>
//              <h1>{name}{surname}</h1>
//          </div>
//      )
//     // return React.createElement('div',null,React.createElement('hi',null,'hello'))
//  }

const Hello=(props)=>{        //using destructures method2
    const {name,surname}=props
    //console.log(props)
   return(
       <div>
           <h1>{name}{surname}</h1>
       </div>
   )
  // return React.createElement('div',null,React.createElement('hi',null,'hello'))
}
 export default Hello;