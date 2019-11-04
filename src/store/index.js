import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers, { initialState } from "./ducks";
import sagas from "./sagas";

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(sagas);

export default store;