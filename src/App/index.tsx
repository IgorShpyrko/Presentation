import * as React from 'react';
import { Route, Redirect,  Switch } from 'react-router-dom';
import './index.css';

import { Nav } from 'src/App/containers/Nav';
import { Rules } from 'src/App/containers/Rules';
import { UseState } from 'src/App/containers/UseState';
import { UseEffect } from 'src/App/containers/UseEffect';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <h2>App</h2>
      <div className='app-container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Rules} />
          <Route path='/state' component={UseState} />
          <Route path='/effect' component={UseEffect} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    </div>
  );
};

