import * as React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

const initialState = {
  count: 0
};

export const UseReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const _dispatch = useDispatch();

  const mapState = React.useCallback(
    state => ({
      data: state,
    }),
    [],
  );

  const { data } = useMappedState(mapState);

  return (
    <article>
      <section>
        <h4>If no global store is needed</h4>
        <span>Count: {state.count} </span>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </section>
      <section>
        <h4>With global store</h4>

        <span>Count: {data}</span>
        <button onClick={() => _dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => _dispatch({type: 'DECREMENT'})}>-</button>
      </section>
    </article>
  );
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};
