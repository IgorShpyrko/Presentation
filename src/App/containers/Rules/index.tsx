import * as React from 'react';

const Rules = () => {
  return (
    <article className='rules'>
      <section>
        <h3>Only Call Hooks at the Top Level</h3>
        <strong>Don’t call Hooks inside loops, conditions, or nested functions.</strong>
      </section>

      <br/>
      <section>
        <h3>Only Call Hooks from React Functions</h3>
        <strong>Don’t call Hooks from regular JavaScript functions.</strong>
      </section>
    </article>
  );
};

export default Rules;
