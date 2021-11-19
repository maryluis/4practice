import {
  ERROR_LOGIN, GET_ORDERS, OUT_LOGIN,
  PUT_LOGIN, PUT_ORDERS, SEND_DATA_EDIT,
  SEND_DATA_EDIT_DONE, SEND_DATA_ORDER, SEND_DATA_ORDER_DONE, SEND_DATA_UPDATE, SEND_LOGIN,
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

export const actionSendEditOrder = (payload) => ({
  type: SEND_DATA_EDIT,
  payload,
});

export const actionSendEditOrderDone = () => ({
  type: SEND_DATA_EDIT_DONE,
});

export const actionSendOrder = (payload) => ({
  type: SEND_DATA_ORDER,
  payload,
});
export const actionSendOrderDone = () => ({
  type: SEND_DATA_ORDER_DONE,
});
export const actionSendUpdate = () => ({
  type: SEND_DATA_UPDATE,
});
