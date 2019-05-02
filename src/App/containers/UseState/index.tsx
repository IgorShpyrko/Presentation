import * as React from 'react';

const UseState = () => {
  return (
    <>
      <UseStateFunction />
      <UseStateClass />
    </>
  )
}

// Function component

export const UseStateFunction = () => {
  const [text, setText] = React.useState<string>('');
  const [count, setCount] = React.useState<number>(0);

  const handleClick = () => {
    setCount(prevCount => {
      return prevCount + 1
    })
  }

  return (
    <article>
      <h3>No class</h3>
      <section className="row">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p>value in state: {text}</p>
      </section>

      <section>
        <p>count: {count}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
      </section>
    </article>
  );
};

// Class component

export class UseStateClass extends React.Component {
  state: {
    text: string;
    count: number;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    const { text, count } = this.state;

    return (
      <article>
        <h3>With class</h3>
        <section className="row">
          <input
            type="text"
            value={text}
            onChange={e => this.setState({text: e.target.value})}
          />
          <p>value in state: {text}</p>
        </section>

        <section>
          <p>count: {count}</p>
          <button onClick={this.handleClick}>+</button>
          <button onClick={() => this.setState((state: any) => ({count : state.count - 1}) )}>-</button>
          <button onClick={() => this.setState({count: 0})}>reset</button>
        </section>
      </article>
    );
  };
};

export default UseState;
