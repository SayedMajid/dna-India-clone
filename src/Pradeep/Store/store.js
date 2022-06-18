import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
// import { lifestyleReducer } from "../../Bussiness/lifestylereducer";
import { pageReducer } from "../Busspage/pagereducer";
// import { entertainmentreducer } from "../manoj/entertainment page/store/entertainmentreducer";
import { sportsreducer } from "../../manoj/sports page/store/sportsreducer";
import { worldReducer } from "../world/worldreducer";
import { worldpageReducer } from "../worldpage/worldpagereducer";
import { lifestyleReducer } from "../Bussiness/lifestylereducer";
import { entertainmentreducer } from "../../manoj/entertainment page/store/entertainmentreducer";

const rootReducer = combineReducers({
  buss: lifestyleReducer,
  page: pageReducer,
  world:worldReducer,
  wpg: worldpageReducer,
  sports:sportsreducer,
  entertainment:entertainmentreducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
