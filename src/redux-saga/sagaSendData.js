import { takeLeading, call, put } from 'redux-saga/effects';
import { SEND_DATA_EDIT } from './actions';
import { editOrder } from '../tools';
import { actionSendEditOrderDone } from './actionsCreaters';

function* sendDataEditWorker(action) {
  yield call(() => editOrder(action.payload));
  yield put(actionSendEditOrderDone());
}
function* sendDataWatcher() {
  yield takeLeading(SEND_DATA_EDIT, sendDataEditWorker);
}
export default sendDataWatcher;
