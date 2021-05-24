import { InferActionsTypes } from "./store";

const initialState = {
  isAuth: false,
  login: 'login',
  password: 'password',
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_IS_AUTH': {
      return {
        ...state,
        isAuth: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export const actions = {
  setIsAuth: (payload: boolean) => ({ type: 'SET_IS_AUTH', payload } as const),
}


// capturing an action type
export type ActionsType = InferActionsTypes<typeof actions>;
// getting the action type
type InitialStateType = typeof initialState;

export default authReducer;
