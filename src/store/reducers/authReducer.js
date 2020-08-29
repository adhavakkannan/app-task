 import { LOGGED_IN, LOGGED_OUT } from "../actions/types";

const loginData = require("../../data/LoginDetails.json");

const initState = { loginData : loginData, isLoggedIn: false };

const authReducer = ( state= initState, action ) =>
{
    switch (action.type) {
      case LOGGED_IN:
        return (state = {
          ...state,
          isLoggedIn: true
        });
      case LOGGED_OUT:
        return (state = {
          ...state,
          isLoggedIn: false
        });
      default: {
        return state;
      }
    }
    
}

export default authReducer