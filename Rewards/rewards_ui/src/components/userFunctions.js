import axios from 'axios';

export const login = user => {
    return axios
    .post('rewards/login',{
        emp_id:user.emp_id
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        console.log(res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}

