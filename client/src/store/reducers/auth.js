import {AUTH_SUCCESS, AUTH_FAIL, USER_LOADED, LOGOUT_SUCCESS} from '../actions/types'; 

const initialState={
  loading: true, 
  isAuthenticated: false,
  user: null
}

export default function(state = initialState, action){
  const { payload, type} = action

  switch(type) {
  case AUTH_SUCCESS: 
  case USER_LOADED:
    return {
      ...state, loading: false, user: payload, isAuthenticated: true
    }
  case AUTH_FAIL: 
  case LOGOUT_SUCCESS:
    return {
      ...state, loading: false, user: null, isAuthenticated: false
    }
  default: return state
  }
}
