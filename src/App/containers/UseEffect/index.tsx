import * as React from 'react';

export const UseEffect = () => {
  const [name, setName] = React.useState('Albus Dumbledore');
  const [age, setAge] = React.useState(175);
  const [height, setHeight] = React.useState(window.innerHeight);
  
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
      <h3>UseEffect</h3>

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
