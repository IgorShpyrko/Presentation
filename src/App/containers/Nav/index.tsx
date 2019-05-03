import * as React from 'react';

type Props = {
  select: (val?: string) => void;
  locations: {
    path: string,
    component: any,
    name: string,
  }[];
  selected: string;
}

const Nav = (props: Props) => {
  const { select, locations, selected } = props;

  return (
    <aside>
      <nav className='main-nav'>
        {locations.map((loc, idx) => {
          const style = (loc.path === selected) ? {backgroundColor: 'rgb(200, 200, 200)'} : {};
          
          return (
            <span style={style} key={idx} onClick={() =>select(loc.path)}>
              {loc.name}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}

export default Nav;