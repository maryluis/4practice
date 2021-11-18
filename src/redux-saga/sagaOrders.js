import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ORDERS } from './actions';
import { getOrders } from '../tools';
import { actionPutOrders } from './actionsCreaters';

function* ordersSagaWorker() {
  const data = yield call(() => getOrders());
  yield put(actionPutOrders(data));
}
function* ordersSagaWatcher() {
  yield takeEvery(GET_ORDERS, ordersSagaWorker);
}
export default ordersSagaWatcher;
