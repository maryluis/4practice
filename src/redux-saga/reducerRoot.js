import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './reducerLogin';
import { SagaMiddleware, rootSaga } from './sagaRoot';

const store = createStore(combineReducers({
  editData: loginReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
