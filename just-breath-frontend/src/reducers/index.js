import { SET_CURRENT_USER, FIND_CURRENT_USER } from '../actions/index.js';
import { combineReducers } from "redux";

import { usersReducer } from './users_reducer'

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      // debugger
      console.log(action.user)
      return {

        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!(Object.keys(action.user).length),

        user: action.user
      };
    default:
      return state;
  }

}

console.log(DEFAULT_STATE.isAuthenticated)


export default combineReducers({ 
  usersReducer,
  authReducer
 });

 //write all your reducers in reducer/index.js 