import { takeEvery, call, put } from 'redux-saga/effects';
import forEach from 'lodash/forEach';
import { SEND_LOGIN } from './actions';
import { applyLogin } from '../tools';
import { actionLoginError, actionPutLogin } from './actionsCreaters';

function* loginSagaWorker(action) {
  const data = yield call(() => applyLogin());
  const loginData = action.payload;
  let isLogged = false;
  let userData;
  forEach(data, (item) => {
    if (item.name === loginData.login && item.password === loginData.password) {
      userData = item;
      isLogged = true;
    }
  });
  if (isLogged) {
    yield put(actionPutLogin(userData));
  } else {
    yield put(actionLoginError('wrong data'));
  }
}
function* loginSagaWatcher() {
  yield takeEvery(SEND_LOGIN, loginSagaWorker);
}
export default loginSagaWatcher;
