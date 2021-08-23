import React, { useState } from 'react';

import {
  ToggleSwitch,
  ToggleSwitchCheckbox,
  ToggleSwitchBackground,
  ToggleSwitchToggle,
} from './toggle-switch.styles';

const ToggleSwitchContainer = (props) => {
  const [checked, toggleCheckbox] = useState(false);
  return (
    <ToggleSwitch>
      <ToggleSwitchBackground htmlFor={props.id}>
        <ToggleSwitchCheckbox
          onChange={() => toggleCheckbox(!checked)}
          type="checkbox"
          id={props.id}
        />
        <ToggleSwitchToggle checked={checked}>&nbsp;</ToggleSwitchToggle>
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
};

export default ToggleSwitchContainer;
