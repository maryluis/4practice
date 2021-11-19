import { reverse, sortBy } from 'lodash';
import {
  ERROR_ORDERS, GET_ORDERS, PUT_ORDERS, SORT_ORDERS,
} from './actions';

const defaultSortData = {
  date: false,
  costumerName: false,
  id: false,
  type: false,
  costumer: false,
  fullName: false,
  done: false,
  status: false,
};
const defaultState = {
  isLoading: false,
  data: [],
  error: null,
  sortBy: defaultSortData,
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
  } if (action.type === SORT_ORDERS) {
    if (state.sortBy[action.payload] === false) {
      const newArray = sortBy(state.data, action.payload);
      return { ...state, sortBy: { ...defaultSortData, [action.payload]: true }, data: newArray };
    }
    const newArray = reverse(sortBy(state.data, action.payload));
    return { ...state, sortBy: { ...defaultSortData }, data: newArray };
  }
  return state;
}
export default orderReducer;
