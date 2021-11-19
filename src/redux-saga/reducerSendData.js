import {
  SEND_DATA_EDIT, SEND_DATA_EDIT_DONE, SEND_DATA_ORDER, SEND_DATA_ORDER_DONE, SEND_DATA_UPDATE,
} from './actions';

function sendDataReducer(state, action) {
  if (state === undefined) {
    return { isLoading: false, data: {}, done: false };
  } if (action.type === SEND_DATA_EDIT || action.type === SEND_DATA_ORDER) {
    return { isLoading: true, data: { ...action.payload }, done: false };
  } if (action.type === SEND_DATA_EDIT_DONE || action.type === SEND_DATA_ORDER_DONE) {
    return { isLoading: false, data: {}, done: true };
  } if (action.type === SEND_DATA_UPDATE) {
    return { isLoading: false, data: {}, done: false };
  }
  return state;
}

export default sendDataReducer;
