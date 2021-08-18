import React from 'react';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component.jsx';
import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';

const HomePage = () => {
  return (
    <HomePageContainer>
      <ToggleSwitch />
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
