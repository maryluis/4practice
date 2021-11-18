import { SEND_DATA_EDIT, SEND_DATA_EDIT_DONE } from './actions';

function sendDataReducer(state, action) {
  if (state === undefined) {
    return { isLoading: false, data: {} };
  } if (action.type === SEND_DATA_EDIT) {
    return { isLoading: true, data: { ...action.payload } };
  } if (action.type === SEND_DATA_EDIT_DONE) {
    return { isLoading: false, data: {} };
  }
  return state;
}

export default sendDataReducer;
