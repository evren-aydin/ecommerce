import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import { fetchRolesIfNeeded } from "../actions/thunkActions";
const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
// Bu şekilde, gerektiğinde rolleri almak için Thunk action creator'ı çağırıyoruz
store.dispatch(fetchRolesIfNeeded());

export default store;
