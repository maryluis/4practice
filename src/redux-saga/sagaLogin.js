import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_LOGIN } from './actions';
import { applyLogin } from '../tools';
import { actionLoginError, actionPutLogin } from './actionsCreaters';

function* loginSagaWorker(action) {
  const data = yield call(() => applyLogin());
  const loginData = action.payload;
  let isLogged = false;
  let userData;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === loginData.login && data[i].password === loginData.password) {
      isLogged = true;
      userData = data[i];
      break;
    }
  }
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
