import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import userReducer from "./user-reducer";

let reducers = combineReducers({
  userData: userReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type ReducersType = typeof reducers; // (globalstate: AppStateType) => AppStateType
// захват типа, возвращаемого методом .getState()
export type AppStateType = ReturnType<ReducersType>
//захват типа экшена, возвращаемого action-creator-ом
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

// @ts-ignore
window.__store__ = store;

export default store;
