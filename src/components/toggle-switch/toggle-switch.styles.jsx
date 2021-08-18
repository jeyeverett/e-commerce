import styled from 'styled-components';

export const ToggleSwitch = styled.div``;

export const ToggleSwitchCheckbox = styled.input`
  width: 40px;
  opacity: 0;
  cursor: pointer;
`;

export const ToggleSwitchBackground = styled.label`
  width: 40px;
  height: 17px;
  position: relative;
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-size: 800px 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const ToggleSwitchToggle = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  font-size: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 10;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  left: ${({ checked }) => (checked ? 22 : 3)}px;
`;
