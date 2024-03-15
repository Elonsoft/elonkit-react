import * as React from 'react';

import { RadioGroupProps } from './RadioGroup.types';

import { FormGroup, useControlled, useForkRef } from '@mui/material';
import useId from '@mui/material/utils/useId';

import RadioGroupContext from './RadioGroupContext';

export const RadioGroup = React.forwardRef<HTMLButtonElement, RadioGroupProps>(function RadioGroup(props, ref) {
  const { children, defaultValue, name: nameProp, onChange, value: valueProp, ...other } = props;
  const rootRef = React.useRef(null);

  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'RadioGroup'
  });

  const handleRef = useForkRef(ref, rootRef);

  const name = useId(nameProp);

  const contextValue = React.useMemo(
    () => ({
      name,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValueState(event.target.value);

        if (onChange) {
          onChange(event, event.target.value);
        }
      },
      value
    }),
    [name, onChange, setValueState, value]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <FormGroup ref={handleRef} role="radiogroup" {...other}>
        {children}
      </FormGroup>
    </RadioGroupContext.Provider>
  );
});
