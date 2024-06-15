// src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "../Crafted-material/ProductReducer";
import productSaga from "../Crafted-material/ProductSaga";

const rootReducer = combineReducers({
  product: productReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(productSaga);

export default store;
