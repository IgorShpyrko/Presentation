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
      <p><i>to learn more:</i></p>
      <p>
        <a
          style={{textDecoration: 'none'}}
          target='blank' 
          href="https://daveceddia.com/usecontext-hook/">
          <strong>useContext </strong><i>by Dave Cedia</i>
        </a>
      </p>
      <p>
        <a
          style={{textDecoration: 'none'}}
          target='blank' 
          href="https://habr.com/ru/post/419449/">
          <strong>Redux против React Context API </strong><i>by Dave Cedia</i>
        </a>
      </p>
    </article>
  );
};

export default UseContext;
