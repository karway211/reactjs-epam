import { MockedResponseType } from "../api/mockedResponse";
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

const userReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default: {
      return {
        ...state
      }
    }
  }
}

type InitialStateType = typeof initialState;

export default userReducer;
