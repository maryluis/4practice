import {
  SEND_DATA_EDIT, SEND_DATA_EDIT_DONE, SEND_DATA_ORDER, SEND_DATA_ORDER_DONE, SEND_DATA_UPDATE,
} from './actions';

function sendDataReducer(state, action) {
  if (state === undefined) return { isLoading: false, data: {}, done: false };
  switch (action.type) {
    case SEND_DATA_EDIT: return {
      isLoading: true, data: action.payload, doneEdit: false, doneOrder: false,
    };
    case SEND_DATA_ORDER: return {
      isLoading: true, data: action.payload, doneOrder: false, doneEdit: false,
    };
    case SEND_DATA_EDIT_DONE: return {
      isLoading: false, data: {}, doneOrder: false, doneEdit: true,
    };
    case SEND_DATA_ORDER_DONE: return {
      isLoading: false, data: {}, doneOrder: true, doneEdit: false,
    };
    case SEND_DATA_UPDATE: return { isLoading: false, data: {}, done: false };
    default: return state;
  }
}

export default sendDataReducer;
