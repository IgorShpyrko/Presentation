import * as React from 'react';

const colors = [
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
      console.log('setColor')
      console.log(Math.random() * colors.length)
      setColor(colors[(Math.random() * colors.length).toFixed(0)])
    },
    [value],
  );

  return (
    <article>
      <section className='row'>
        <input type="text" value={value} onChange={handleChange}/>
        <p>{color}</p>
      </section>
    </article>
  )
}