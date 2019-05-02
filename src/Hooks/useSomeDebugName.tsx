import * as React from 'react';

export const useSomeDebugName = () =>  { 
  const renderCountRef = React.useRef(0);

  React.useDebugValue( 
    `This component has been redrawn ${renderCountRef.current} times` , );
  
  React.useEffect (()  =>  { 
    renderCountRef.current ++ ; 
  }); 
};
