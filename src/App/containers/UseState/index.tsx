import * as React from 'react';


export const  UseState = () => {
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
    </article>
  );
};


// Class component

export class UseStateClass extends React.Component {
  state: {
    text: string;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { text } = this.state;

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
      </article>
    );
  }
};