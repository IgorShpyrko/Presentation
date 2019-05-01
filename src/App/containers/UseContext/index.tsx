import * as React from 'react';

import { ThemeContext, LocaleContext } from 'src/context';

const UseContext = () => {
  const [name, setName] = React.useState('Albus Dumbledore');
  const [age, setAge] = React.useState(175);

  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };

  return (
    <article>
      <section className={`row ${theme.light}`}>
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className={`row ${theme.dark}`}>
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
      <section className={`row ${theme.light}`}>
        <span>Age</span>
        <input type="text" value={locale.foreign} disabled />
      </section>
    </article>
  );
};

export default UseContext;
