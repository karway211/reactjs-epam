import { InferActionsTypes, AppDispatchType } from "./store";
import { MockedResponseType } from "../api/mockedResponse";
import { mockedApi } from "../api/mockedApi";

const initialState = {
  user: {
    firstName: 'Andrey',
    lastName: 'Karcheuski',
  },
  avatar: {
    image: 'https://avatars.githubusercontent.com/u/47392703?v=4',
    alt: 'my photo',
  },
  contact: {
    phone: '375445477737',
    skype: 'live:37250c3478b9f1a1',
  },
  warehouse: [] as MockedResponseType
}

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_DATA_WAREHOUSE': {
      return {
        ...state,
        warehouse: action.payload
      }
    }
  }
  return state;
}

const actions = {
  setDataWarehouse: (payload: MockedResponseType) => ({ type: 'SET_DATA_WAREHOUSE', payload }),
}

export const getDataWarehouse = () => async (dispatch: AppDispatchType) => {
  const data = await mockedApi();
  dispatch(actions.setDataWarehouse(data));
}

// capturing an action type
type ActionsType = InferActionsTypes<typeof actions>;
// getting the action type
type InitialStateType = typeof initialState;

export default userReducer;
