import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './reducerLogin';
import { SagaMiddleware, rootSaga } from './sagaRoot';
import orderReducer from './reducerOrders';

const store = createStore(combineReducers({
  editData: loginReducer,
  orders: orderReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export default store;
