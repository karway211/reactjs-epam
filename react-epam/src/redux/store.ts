import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./user-reducer";

let reducers = combineReducers({
  userData: userReducer,
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

type ReducersType = typeof reducers; // (globalstate: AppStateType) => AppStateType
// getting the State type
export type AppStateType = ReturnType<ReducersType>
// getting the action type
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export type AppDispatchType = typeof store['dispatch'];

// @ts-ignore
window.__store__ = store;

export default store;
