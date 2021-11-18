import { ERROR_ORDERS, GET_ORDERS, PUT_ORDERS } from './actions';

const defaultState = {
  isLoading: false,
  data: [],
  error: null,
};

function orderReducer(state, action) {
  if (state === undefined) {
    return defaultState;
  } if (action.type === GET_ORDERS) {
    return { ...state, isLoading: true };
  } if (action.type === PUT_ORDERS) {
    return { ...state, isLoading: false, data: [...action.payload] };
  } if (action.type === ERROR_ORDERS) {
    return { ...defaultState, error: 'Something wrong' };
  } return state;
}
export default orderReducer;
