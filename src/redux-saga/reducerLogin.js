import {
  ERROR_LOGIN, OUT_LOGIN, PUT_LOGIN, SEND_LOGIN,
} from './actions';

const defaultState = {
  loginData: null,
  isLogin: false,
  isAdmin: false,
  isLoading: false,
  error: null,
};

function loginReducer(state, action) {
  if (state === undefined) {
    if (localStorage.practice4) {
      return JSON.parse(localStorage.practice4);
    }
    return defaultState;
  } if (action.type === SEND_LOGIN) {
    return { ...state, isLoading: true };
  } if (action.type === PUT_LOGIN) {
    localStorage.practice4 = JSON.stringify(action.payload);
    return {
      loginData: action.payload,
      isLogin: true,
      isAdmin: action.payload.isAdmin,
      isLoading: false,
      error: null,
    };
  } if (action.type === ERROR_LOGIN) {
    return { ...defaultState, error: action.payload };
  } if (action.type === OUT_LOGIN) {
    return defaultState;
  }
  return state;
}

export default loginReducer;
