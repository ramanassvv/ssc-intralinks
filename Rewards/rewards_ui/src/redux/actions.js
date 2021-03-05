import axios from 'axios';


export function loginDispatch(results){   
    return {
        type: 'SET_USER',
        results
    }
}


export function logout() {
    return dispatch => {
        console.log('hi')
      localStorage.removeItem('userToken');
      //this.state={SET_USER:JSON.parse(localStorage.getItem("SET_USER"))};
      dispatch(loginDispatch({}));
    }
  }

export function login(data){
    return dispatch => {
        return axios.post('rewards/login',data)
        .then(res=>{
            console.log('Got response from backend',res.data)
            localStorage.setItem('usertoken',res.data)
            dispatch(loginDispatch(res.data))
        })
        .catch(err=>{
            console.log('error',err);
        })

    }
}

