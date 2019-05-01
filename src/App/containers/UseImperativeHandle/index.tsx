import * as React from 'react';

interface Handler {
  setFocus(): void;
}

const FancyInput = React.forwardRef<Handler>((props, ref) => {
  const inputRef = React.useRef({} as HTMLInputElement);

  React.useImperativeHandle(ref, () => {
    return {
      setFocus() {
        inputRef.current.focus();
      }
    };
  });

  return <input ref={inputRef} type="text" />;
});

const UseImperativeHandle = () => {
  const ref = React.useRef({} as Handler);

  return (
    <article>
      <section>
      <FancyInput ref={ref} />
      <button
        onClick={() => {
          ref.current.setFocus();
        }}
      >
        click
      </button>
        <p>
          P.S.: As always, imperative code using refs should be avoided
          in most cases. useImperativeHandle should be used with
          forwardRef
        </p>
      </section>
    </article>
  );
};

export default UseImperativeHandle;
