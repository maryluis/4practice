import {
  ERROR_LOGIN, GET_ORDERS, OUT_LOGIN, PUT_LOGIN, PUT_ORDERS, SEND_LOGIN,
} from './actions';

export const actionSendLogin = (payload) => ({
  type: SEND_LOGIN,
  payload,
});

export const actionPutLogin = (payload) => ({
  type: PUT_LOGIN,
  payload,
});

export const actionLoginError = (payload) => ({
  type: ERROR_LOGIN,
  payload,
});
export const actionOutLogin = () => ({
  type: OUT_LOGIN,
});

export const actionGetOrders = () => ({
  type: GET_ORDERS,
});

export const actionPutOrders = (payload) => ({
  type: PUT_ORDERS,
  payload,
});
