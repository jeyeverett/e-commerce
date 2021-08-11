import styled from 'styled-components';

const getSize = (props) => {
  return props.size ? '380px' : '240px';
};

const getImageUrl = (props) => props.imageUrl;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${getSize};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  border-radius: 5%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${getImageUrl});
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -10;

  ${MenuItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s;

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #634b2c;

    @media screen and (max-width: 600px) {
      margin-top: 0;
    }
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
    color: #634b2c;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    padding: 0 5px;
    height: 75px;
  }
`;
