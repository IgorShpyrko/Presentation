import * as React from 'react';
import { StoreContext } from 'redux-react-hook';
import { store } from 'src/store';

const Nav = React.lazy(() => import('src/App/containers/Nav'));
const GetStarted = React.lazy(() => import('src/App/containers/GetStarted'));
const Benefits = React.lazy(() => import('src/App/containers/Benefits'));
const Rules = React.lazy(() => import('src/App/containers/Rules'));
const UseState = React.lazy(() => import('src/App/containers/UseState'));
const UseEffect = React.lazy(() => import('src/App/containers/UseEffect'));
const UseContext = React.lazy(() => import('src/App/containers/UseContext'));
const UseCustomHook = React.lazy(() => import('src/App/containers/UseCustomHook'));
const UseReducer = React.lazy(() => import('src/App/containers/UseReducer'));
const UseCallback = React.lazy(() => import('src/App/containers/UseCallback'));
const UseMemo = React.lazy(() => import('src/App/containers/UseMemo'));
const UseRef = React.lazy(() => import('src/App/containers/UseRef'));
const ForwardRef = React.lazy(() => import('src/App/containers/ForwardRef'));
const UseImperativeHandle = React.lazy(() => import('src/App/containers/UseImperativeHandle'));
const UseLayoutEffect = React.lazy(() => import('src/App/containers/UseLayoutEffect'));
const UseDebugValue = React.lazy(() => import('src/App/containers/UseDebugValue'));

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
  {path: '/forwardref',       component: <ForwardRef />,          name: 'ForwardRef' },
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
    <StoreContext.Provider value={store}>
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
          <React.Suspense fallback={<div>Loading...</div>}>
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
          </React.Suspense>
        </div>
      </div>
    </StoreContext.Provider>
  );
};
