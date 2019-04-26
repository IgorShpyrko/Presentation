type Action = {
  type: string,
  payload?: any
}

type InitialState = number;

const initialState: InitialState = 0;

export const reducer = (state:InitialState = initialState, action: Action) => {
  switch (action.type) {

    case 'INCREMENT': {
      return +state + 1;
    }

    case 'DECREMENT': {
      return +state - 1;
    }

    default:
      return state;
  }
};