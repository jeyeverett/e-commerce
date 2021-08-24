import styled from 'styled-components';

const getSize = (props) => {
  return props.size ? '380px' : '240px';
};

const getFlex = (props) => {
  return props.size ? '40%' : '30%';
};

const getImageUrl = (props) => props.imageUrl;

export const MenuItemContainer = styled.div`
  min-width: ${getFlex};
  height: ${getSize};
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

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
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

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
  border: 1px solid white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  transition: all 0.3s;

  .title {
    font-family: 'Indie Flower', sans-serif;
    font-weight: bold;
    margin: 0;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 600px) {
      font-size: 24px;
      margin-top: 0;
    }
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
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
