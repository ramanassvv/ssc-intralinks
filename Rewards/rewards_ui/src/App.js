// import React from 'react';
// import { Route, BrowserRouter as Router } from 'react-router-dom'

import {connect } from 'react-redux';
import * as actions from './redux/actions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './App.css';
import Main from './Main'

function mapStateToProps(state){

    console.log('mapping states to props',state)
    return {
        loginDispatchReducer:state.loginDispatchReducer,
        auth:state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}
//binding actions to dispatch instaed of directly writing in view

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App

// function mapStateToProps(state){
//     console.log('################',state.loginDispatch)
//     return {
//         loginDispatch:state.loginDispatch   
//     }
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

// const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

// export default App;
