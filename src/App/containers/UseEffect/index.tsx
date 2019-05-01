import * as React from 'react';

const UseEffect = () => {
  return (
    <>
      <UseEffectNoClass />
      <UseEffectWithClass />
    </>
  );
};

export const UseEffectNoClass = () => {
  const [name, setName] = React.useState<string>('Albus Dumbledore');
  const [age, setAge] = React.useState<string | number>(175);
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  
  React.useEffect(
    () => {
      document.title = `${name} | ${age}`;
    },
    [name, age],
  );
  
  React.useEffect(
    () => {
      const handleResize = () => {
        setHeight(window.innerHeight)
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [],
  );

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };

  return (
    <article>
      <h3>No class</h3>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
      <section className="row">
        <span>Height</span>
        <input type="text" value={height} disabled />
      </section>
      <section>
        <p>P.S.:</p>
        <p>if you skip array as second parametr - effect will be done on every rerender</p>
        <p>if array is empty - effect will run as component did mount</p>
        <p>if array is filled with value - effect will run as value did mount and did update</p>
      </section>
    </article>
  );
};


export class UseEffectWithClass extends React.Component{
  state: {
    name: string;
    age: number | string;
    height: number;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Albus Dumbledore',
      age: 175,
      height: window.innerHeight
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight
    })
  }

  componentDidMount() {
    document.title = `${this.state.name} | ${this.state.age}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if ((prevState.age !== this.state.age) || (prevState.name !== this.state.name)) {
      document.title = `${this.state.name} | ${this.state.age}`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleNameChange(e: any) {
    this.setState({
      name: e.target.value
    });
  };

  handleAgeChange = (e: any) => {
    this.setState({
      age: e.target.value
    });
  };

  render() {
    const { name, age, height } = this.state;

    return (
      <article>
        <h3>With class</h3>
        <section className="row">
          <span>Name</span>
          <input type="text" value={name} onChange={this.handleNameChange} />
        </section>
        <section className="row">
          <span>Age</span>
          <input type="text" value={age} onChange={this.handleAgeChange} />
        </section>
        <section className="row">
          <span>Height</span>
          <input type="text" value={height} disabled />
        </section>
        <section>
          <p>P.S.:</p>
          <p>if you skip array as second parametr - effect will be done on every rerender</p>
          <p>if array is empty - effect will run as component did mount</p>
          <p>if array is filled with value - effect will run as value did mount and did update</p>
        </section>
      </article>
    );
  }
};

export default UseEffect;
