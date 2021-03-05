import React from 'react';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import './SendKudos.css';
import {Redirect} from 'react-router-dom';
//const { auth } = require('google-auth-library');


class Error extends React.Component{
    constructor(props){
        super(props);



    }

   

    render(){
        // const {auth}=this.props;
        // if(!auth) return <Redirect to="/Error"/>
        return(
            <div>
                <p>404 Error !!!!!!!</p>
            </div>

        )
}
}

export default Error;