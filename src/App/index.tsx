import * as React from 'react';
// import { BrowserRouter, Route, Redirect,  Switch, } from 'react-router-dom';

import { Nav } from 'src/App/containers/Nav';
import { GetStarted } from 'src/App/containers/GetStarted';
import { Benefits } from 'src/App/containers/Benefits';
import { Rules } from 'src/App/containers/Rules';
import { UseState } from 'src/App/containers/UseState';
import { UseEffect } from 'src/App/containers/UseEffect';
import { UseContext } from 'src/App/containers/UseContext';
import { UseCustomHook } from 'src/App/containers/UseCustomHook';
import { UseReducer } from 'src/App/containers/UseReducer';
import { UseCallback } from 'src/App/containers/UseCallback';
import { UseMemo } from 'src/App/containers/UseMemo';
import { UseRef } from 'src/App/containers/UseRef';
import { UseImperativeHandle } from 'src/App/containers/UseImperativeHandle';
import { UseLayoutEffect } from 'src/App/containers/UseLayoutEffect';
import { UseDebugValue } from 'src/App/containers/UseDebugValue';

const locations: {
  path: string,
  component: any,
  name: string,
}[] = [
  {path: '/',                 component: <GetStarted />,          name: 'Get Started' },
  {path: '/benefits',         component: <Benefits />,            name: 'Benefits' },
  {path: '/rules',            component: <Rules />,               name: 'Rules' },
  {path: '/state',            component: <UseState />,            name: 'UseState' },
  {path: '/effect',           component: <UseEffect />,           name: 'UseEffect' },
  {path: '/context',          component: <UseContext />,          name: 'UseContext' },
  {path: '/customhook',       component: <UseCustomHook />,       name: 'UseCustomHook' },
  {path: '/reducer',          component: <UseReducer />,          name: 'UseReducer' },
  {path: '/callback',         component: <UseCallback />,         name: 'UseCallback' },
  {path: '/memo',             component: <UseMemo />,             name: 'UseMemo' },
  {path: '/ref',              component: <UseRef />,              name: 'UseRef' },
  {path: '/imperativeHandle', component: <UseImperativeHandle />, name: 'UseImperativeHandle' },
  {path: '/layoutEffect',     component: <UseLayoutEffect />,     name: 'UseLayoutEffect' },
  {path: '/debugValue',       component: <UseDebugValue />,       name: 'UseDebugValue' },
]

export const App = () => {
  const [selected, setSelected] = React.useState('/');

  const handleKeyPress = (e: any) => {
    let index = 0;

    locations.forEach((loc, idx) => {
      if (loc.path === selected) {
        index = idx
      }
    });

    if (e.keyCode === 37) {
      // go Left
      setSelected(
        (index - 1) >= 0
          ? locations[index - 1].path
          : locations[locations.length - 1].path
      )
    } else if (e.keyCode === 39) {
      // go Right
      setSelected(
        (index + 1) >= (locations.length)
          ? locations[0].path
          : locations[index + 1].path
      )
    }
  }

  const handleSelect = (val?: string) => {
    if (!val) {
      setSelected('/');
    } else {
      let _selected = '/';

      locations.forEach(loc => {
        if (loc.path === val) {
          _selected = val;
        }
      });
      setSelected(_selected);
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return (() => {
      document.removeEventListener('keydown', handleKeyPress);
    })
  });

  return (
    <div className='app-wrapper'>
      <h2>
        {locations.map((item, idx) => {
          if (item.path === selected) {
            return item.name
          }
          return null
        })}
      </h2>
      <div className='app-container'>
        <Nav select={handleSelect} locations={locations} selected={selected}/>
          {locations.map((item, idx) => {
            if (item.path === selected) {
              return (
                <React.Fragment key={idx}>
                  {item.component}
                </React.Fragment>
              )
            }
            return null
          })}
      </div>
    </div>
  );
};
