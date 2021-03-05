import { combineReducers } from 'redux';
//import { sessionReducer } from 'redux-react-session';
import { isEmpty } from 'lodash';

//import { loginDispatch } from './actions';


const initialState = {
    
    user:{},
    isAuthenticated: false
  };


function loginDispatchReducer(state=initialState,action={}){
   console.log('reached reducer',action.results)
    switch(action.type){
        case 'SET_USER':
                return {
                 user:action.results,
                  isAuthenticated: !isEmpty(action.results)
                }
        default:return state
    }
}

// const reducers = {
//   session:sessionReducer,
//   loginDispatchReducer:loginDispatchReducer
// }


const rootReducer=combineReducers({loginDispatchReducer})


export default rootReducer;