import * as React from 'react';

const colors = [
  'aqua',
  'blue',
  'chartreuse',
  'cornflowerblue',
  'darkcyan',
  'forestgreen',
  'green',
  'hotpink',
  'indigo',
  'khaki',
  'red',
  'yellow',
];

const UseCallback = () => {
  const [withCallback, setWithCallBack] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [color, setColor] = React.useState(colors[0]);
  const [current, setCurrent] = React.useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
    const idx = (Math.random() * (colors.length - 1)).toFixed(0);
    setColor(colors[idx]);
    setCurrent(color);
  }

  const callBack = React.useCallback(
    (e: any) => {
      setValue(e.target.value);
      const idx = (Math.random() * (colors.length - 1)).toFixed(0);
      setColor(colors[idx]);
      setCurrent(color);
    },
    [value],
  );

  return (
    <article>
      <section className='row'>
        <button onClick={() => setWithCallBack(!withCallback)}>
          {withCallback ? 'WithCallBack' : 'No callBack'}
        </button>
        <p>{color}</p>
        <p>state value: {current}</p>
        <ChildComponent
          value={value}
          change={withCallback ? callBack : handleChange} />
        <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
      </section>
      <section>
        <p>
          When no arguments are passed to callBack function, the function
          itself doesn`t change. And we see the first state of our application.
          When adding argument. the function is changed after each
          argument`s change. This prevents from unnecessary creating of
          functions if values didn`t change
        </p>
      </section>
    </article>
  )
};

const ChildComponent = (props: any) => {
  const { value, change } = props;

  return (
    <div>
      <input type="text" value={value} onChange={change}/>
    </div>
  )
};

export default UseCallback;
