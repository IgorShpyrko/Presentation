import * as React from 'react';
import { BrowserRouter, Route, Redirect,  Switch, } from 'react-router-dom';

import { Nav } from 'src/App/containers/Nav';
import { GetStarted } from 'src/App/containers/GetStarted';
import { Benefits } from 'src/App/containers/Benefits';
import { Rules } from 'src/App/containers/Rules';
import { UseState } from 'src/App/containers/UseState';
import { UseEffect } from 'src/App/containers/UseEffect';
import { UseContext } from 'src/App/containers/UseContext';
import { UseCustomHook } from 'src/App/containers/UseCustomHook';

const locations = [
  {path: '/benefits',  component: Benefits },
  {path: '/rules',     component: Rules },
  {path: '/state',     component: UseState },
  {path: '/effect',    component: UseEffect },
  {path: '/context',   component: UseContext },
  {path: '/customhook',component: UseCustomHook },
]

export const App = () => {

  const handleKeyPress = () => {
    console.log('keydown')
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return (() => {
      document.removeEventListener('keydown', handleKeyPress);
    })
  });

  return (
    <div className='app-wrapper'>
      <h2>App</h2>
      <div className='app-container'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/'     component={GetStarted} />
          {locations.map((item, idx) => {
            return <Route key={idx} path={item.path} component={item.component} />
          })}
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
};
