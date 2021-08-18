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
      <ToggleSwitchBackground htmlFor="toggleCheckbox">
        <ToggleSwitchCheckbox
          onChange={() => toggleCheckbox(!checked)}
          type="checkbox"
          id="toggleCheckbox"
        />
        <ToggleSwitchToggle checked={checked}>&nbsp;</ToggleSwitchToggle>
      </ToggleSwitchBackground>
    </ToggleSwitch>
  );
};

export default ToggleSwitchContainer;
