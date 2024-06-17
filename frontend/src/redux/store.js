import { createStore, applyMiddleware, combineReducers ,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './productReducer';
import productSaga from './productSaga';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products: productReducer,

});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(productSaga);
console.log("Initial State",store.getState())

export default store;
