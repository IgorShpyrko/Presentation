import * as React from 'react';
import { useSomeDebugName } from 'src/Hooks/useSomeDebugName';

const UseDebugValue = () => {
  const [count, setCount] = React.useState(0);
  useSomeDebugName();

  return (
    <article>
      <section>
        <span>count: {count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
      <p>
        <a 
          style={{textDecoration: 'none'}}
          target='blank' 
          href="https://qiita.com/uhyo/items/246fb1f30acfeb7699da">
          <strong>React 16.8: We now have a closer look at the official React Hooks </strong>
          <i>by uhyo</i>
        </a>
      </p>
    </article>
  );
};

export default UseDebugValue;
