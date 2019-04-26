import * as React from 'react';

export const UseState = () => {
  const [text, setText] = React.useState('');

  return (
    <article>
      <section className="row">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p>value in state: {text}</p>
      </section>
    </article>
  );
};
