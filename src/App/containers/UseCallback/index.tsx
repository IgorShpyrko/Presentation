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

  const handleChange = (e: any) => {
    setValue(e.target.value);
    const idx = (Math.random() * (colors.length - 1)).toFixed(0);
    setColor(colors[idx]);
  }

  const callBack = React.useCallback(
    (e: any) => {
      setValue(e.target.value);
      const idx = (Math.random() * (colors.length - 1)).toFixed(0);
      setColor(colors[idx]);
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
        <ChildComponent
          value={value}
          change={withCallback ? callBack : handleChange} />
        <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
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
