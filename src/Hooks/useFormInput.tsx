import * as React from 'react';

export function useFormInput(initialValue: string) {
  const [value, setValue] = React.useState(initialValue);

  const onHandleChange = (e: any) => {
    setValue(e.target.value);
  };
  
  return { value, onChange: onHandleChange };
}