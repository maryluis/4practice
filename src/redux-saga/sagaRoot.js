import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import loginSagaWatcher from './sagaLogin';
import ordersSagaWatcher from './sagaOrders';

function* rootSaga() {
  yield all([
    loginSagaWatcher(),
    ordersSagaWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
