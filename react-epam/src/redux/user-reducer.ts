import { InferActionsTypes, AppDispatchType } from "./store";
import { MockedResponseItemType, MockedResponseType } from "../api/mockedResponse";
import { mockedApi } from "../api/mockedApi";
import { ErrorCardsType } from "../types";

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
  warehouse: [] as MockedResponseType,
  errors: {
    title: '' as string | boolean,
    price: '' as string | boolean,
    imageUrl: '' as string | boolean,
    gender: '' as string | boolean,
  } as ErrorCardsType,
}

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_DATA_WAREHOUSE': {
      return {
        ...state,
        warehouse: action.payload
      }
    }
    case 'DELETE_WAREHOUSE_ITEM': {
      const id = action.payload;
      const result = state.warehouse.filter(obj => obj.id !== id);
      return {
        ...state,
        warehouse: result
      }
    }
    case 'SET_WAREHOUSE_ITEM': {
      return {
        ...state,
        warehouse: [...state.warehouse, action.payload]
      }
    }
    case 'SET_ERRORS': {
      return {
        ...state,
        errors: { ...state.errors, ...action.payload },
      }
    }
    case 'CLEAR_ERRORS': {
      const newErrors: { [key: string]: string | boolean } = { ...state.errors };
      Object.keys(newErrors).forEach(key => {
        newErrors[key] = ''
      });
      return {
        ...state,
        errors: { ...state.errors, ...newErrors },
      }
    }
    default: {
      return {
        ...initialState
      }
    }
  }
}

export const actions = {
  setDataWarehouse: (payload: MockedResponseType) => ({ type: 'SET_DATA_WAREHOUSE', payload } as const),
  deleteWarehouseItem: (payload: number) => ({ type: 'DELETE_WAREHOUSE_ITEM', payload } as const),
  setWarehouseItem: (payload: MockedResponseItemType) => ({ type: 'SET_WAREHOUSE_ITEM', payload } as const),
  setErrors: (payload: { [key: string]: string | boolean }) => ({ type: 'SET_ERRORS', payload } as const),
  clearErrors: () => ({ type: 'CLEAR_ERRORS' } as const),
}

export const getDataWarehouse = () => async (dispatch: AppDispatchType): Promise<void> => {
  const data = await mockedApi();
  dispatch(actions.setDataWarehouse(data));
}


// capturing an action type
export type ActionsType = InferActionsTypes<typeof actions>;
// getting the action type
type InitialStateType = typeof initialState;

export default userReducer;
