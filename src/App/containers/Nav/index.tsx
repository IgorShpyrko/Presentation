import * as React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <aside>
      <h3>Nav</h3>
      <nav className='main-nav'>
        <Link to={'/'}><span>Get Started</span></Link>
        <Link to={'/benefits'}><span>Benefits</span></Link>
        <Link to={'/rules'}><span>Rules</span></Link>
        <br/>
        <Link to={'/state'}><span>UseState</span></Link>
        <Link to={'/effect'}><span>useEffect</span></Link>
        <Link to={'/context'}><span>useContext</span></Link>
        <Link to={'/customhook'}><span>UseCustomHook</span></Link>
        <br/>
        <Link to={'/reducer'}><span>useReducer</span></Link>
        <Link to={'/callback'}><span>useCallback</span></Link>
        <Link to={'/memo'}><span>useMemo</span></Link>
        <Link to={'/ref'}><span>useRef</span></Link>
        <Link to={'/imperativeHandle'}><span>useImperativeHandle</span></Link>
        <Link to={'/layoutEffect'}><span>useLayoutEffect</span></Link>
        <Link to={'/debugValue'}><span>useDebugValue</span></Link>
      </nav>
    </aside>
  )
}