import { InferActionsTypes } from "./store";

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
}

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {
  return state;
}

const actions = {}
// capturing an action type
type ActionsType = InferActionsTypes<typeof actions>;
// getting the action type
type InitialStateType = typeof initialState;

export default userReducer;
