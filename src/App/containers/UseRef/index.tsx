import * as React from 'react';

const UseRef = () => {
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if(inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <article>
      <section className='row'>
        <input ref={inputEl} type="text" />
        <br/>
        <button onClick={onButtonClick}>Focus the input</button>
      </section>
    </article>
  );
};

export default UseRef;
