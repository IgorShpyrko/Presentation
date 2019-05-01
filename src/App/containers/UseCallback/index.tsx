import * as React from 'react';

const colors = [
  'aliceblue',
  'aqua',
  'red',
  'green',
  'blue',
  'yellow'
];

export const UseCallback = () => {
  const [value, setValue] = React.useState('');
  const [color, setColor] = React.useState(colors[0]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    callBack();
  }

  const callBack = React.useCallback(
    () => {
      setColor(colors[(Math.random() * colors.length).toFixed(0)])
    },
    [value],
  );

  return (
    <article>
      <section className='row'>
        <input type="text" value={value} onChange={handleChange}/>
        <div style={{
          backgroundColor: `${color}`,
          width: '100px',
          height: '100px',
          margin: '10px',
          }}>
        </div>
      </section>
    </article>
  )
}