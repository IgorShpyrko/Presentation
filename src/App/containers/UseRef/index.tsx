import * as React from 'react';

const UseRef = () => {
  return (
    <>
      <UseRefFunction />
      <UseRefClass />
    </>
  )
}

const UseRefFunction = () => {
  const inputEl = React.useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if(inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <article>
      <h3>No class</h3>
      <section className='row'>
        <input ref={inputEl} type="text" />
        <br/>
        <button onClick={onButtonClick}>Focus the input</button>
      </section>
      <section>
        <p>P.S.:</p>
        <p>
          The benefit of using useRef not createRef is when 
          using createRef every time it is a new ref to an object.
          useRef does not change after rerender
        </p>
        <p>
          <a
            target='blank'
            style={{textDecoration: 'none'}}
            href="https://codesandbox.io/s/1rvwnj71x3">
            <strong>Sandbox to feel the difference </strong>
            <i>by Ryan Cogswell</i>
          </a>
        </p>
      </section>
    </article>
  );
};

class UseRefClass extends React.Component {
  constructor(props: any) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  private inputEl = React.createRef<HTMLInputElement>();

  onButtonClick() {
    if(this.inputEl && this.inputEl.current) {
      this.inputEl.current.focus();
    }
  }

  render() {
    return (
      <article>
        <h3>With class</h3>
        <section className='row'>
          <input ref={this.inputEl} type="text" />
          <br/>
          <button onClick={this.onButtonClick}>Focus the input</button>
        </section>
      </article>
    )
  }
}

export default UseRef;
