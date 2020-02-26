import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Namelist from './components/Namelist';
function App() {
  return (
   
    <div className="App">
      {/* <h1>hello world</h1> */}
       {/* <Welcome name="intralinks" surname="ss&c"/>  */}
       {/* <Message /> */}
       {/* <EventBind/> */}
       {/* <ParentComponent /> */}
       {/* <UserGreeting /> */}
       <Namelist />
       {/* <Hello name="ramana" surname="ssvv"/>
      <Hello name="venkat" surname="syam"/>
      <Hello name="syam"/>  */}
    </div>
 
  );
}

export default App;
