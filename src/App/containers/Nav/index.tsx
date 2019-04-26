import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  select: (val?: string) => void;
  locations: {
    path: string,
    component: any,
    name: string,
  }[];
  selected: string;
}

export const Nav = (props: Props) => {
  const { select, locations, selected } = props;

  return (
    <aside>
      <nav className='main-nav'>
        {locations.map((loc, idx) => {
          const style = (loc.path === selected) ? {backgroundColor: 'rgb(200, 200, 200)'} : {};
          
          return (
            <Link style={style} key={idx} to={loc.path} onClick={() =>select(loc.path)}><span>{loc.name}</span></Link>
          )
        })}
      </nav>
    </aside>
  )
}