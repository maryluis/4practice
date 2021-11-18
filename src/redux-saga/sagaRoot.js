import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import loginSagaWatcher from './sagaLogin';
import ordersSagaWatcher from './sagaOrders';
import sendDataWatcher from './sagaSendData';

function* rootSaga() {
  yield all([
    loginSagaWatcher(),
    ordersSagaWatcher(),
    sendDataWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
