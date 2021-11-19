import { reverse, sortBy, chunk } from 'lodash';
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
  dataPages: [],
};

function orderReducer(state, action) {
  if (state === undefined) {
    return defaultState;
  } if (action.type === GET_ORDERS) {
    return { ...state, isLoading: true };
  } if (action.type === PUT_ORDERS) {
    return {
      ...state, isLoading: false, data: [...action.payload], dataPages: chunk(action.payload, 5),
    };
  } if (action.type === ERROR_ORDERS) {
    return { ...defaultState, error: 'Something wrong' };
  } if (action.type === SORT_ORDERS) {
    if (state.sortBy[action.payload] === false) {
      const newArray = sortBy(state.data, action.payload);
      return {
        ...state,
        sortBy: { ...defaultSortData, [action.payload]: true },
        data: newArray,
        dataPages: chunk(newArray, 5),
      };
    }
    const newArray = reverse(sortBy(state.data, action.payload));
    return {
      ...state, sortBy: { ...defaultSortData }, data: newArray, dataPages: chunk(newArray, 5),
    };
  }
  return state;
}
export default orderReducer;
