import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import loginSagaWatcher from './sagaLogin';

function* rootSaga() {
  yield all([
    loginSagaWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
