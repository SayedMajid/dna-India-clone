import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { lifestyleReducer } from "../Bussiness/lifestylereducer";
import { pageReducer } from "../Busspage/pagereducer";
import { worldReducer } from "../world/worldreducer";
import { worldpageReducer } from "../worldpage/worldpagereducer";

const rootReducer = combineReducers({
  buss: lifestyleReducer,
  page: pageReducer,
  world:worldReducer,
  wpg: worldpageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
