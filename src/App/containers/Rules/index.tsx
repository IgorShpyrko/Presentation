import * as React from 'react';

export const Rules = () => {
  return (
    <div>
      <h3>Only Call Hooks at the Top Level</h3>
      <strong>Don’t call Hooks inside loops, conditions, or nested functions.</strong>

      <br/>

      <h3>Only Call Hooks from React Functions</h3>
      <strong>Don’t call Hooks from regular JavaScript functions.</strong>
    </div>
  );
};
