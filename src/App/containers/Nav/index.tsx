import * as React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='main-nav'>
      <h3>Nav</h3>
      <ul>
        <Link to={'/'}><li>Rules</li></Link>
        <br/>
        <Link to={'/state'}><li>UseState</li></Link>
        <Link to={'/effect'}><li>useEffect</li></Link>
        <Link to={'/context'}><li>useContext</li></Link>
        <br/>
        <Link to={'/reducer'}><li>useReducer</li></Link>
        <Link to={'/callback'}><li>useCallback</li></Link>
        <Link to={'/memo'}><li>useMemo</li></Link>
        <Link to={'/ref'}><li>useRef</li></Link>
        <Link to={'/imperativeHandle'}><li>useImperativeHandle</li></Link>
        <Link to={'/layoutEffect'}><li>useLayoutEffect</li></Link>
        <Link to={'/debugValue'}><li>useDebugValue</li></Link>
      </ul>
    </div>
  )
}