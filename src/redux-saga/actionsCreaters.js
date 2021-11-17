import { ERROR_LOGIN, PUT_LOGIN, SEND_LOGIN } from './actions';

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
