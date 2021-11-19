import { takeLeading, call, put } from 'redux-saga/effects';
import { SEND_DATA_EDIT, SEND_DATA_ORDER } from './actions';
import { editOrder, putOrder } from '../tools';
import { actionSendEditOrderDone, actionSendOrderDone } from './actionsCreaters';

function* sendDataEditWorker(action) {
  yield call(() => editOrder(action.payload));
  yield put(actionSendEditOrderDone());
}

function* sendDataOrderWorker(action) {
  yield call(() => putOrder(action.payload));
  yield put(actionSendOrderDone());
}

function* sendDataWatcher() {
  yield takeLeading(SEND_DATA_EDIT, sendDataEditWorker);
  yield takeLeading(SEND_DATA_ORDER, sendDataOrderWorker);
}
export default sendDataWatcher;
