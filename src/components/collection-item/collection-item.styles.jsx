import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

const getImageUrl = (item) => {
  return item.imageUrl;
};

export const ItemDescriptionContainer = styled.p`
  position: absolute;
  opacity: 0;
  color: white;
  width: 80%;
  background-color: rgba(72, 133, 168, 0.9);
  border-radius: 10px;
  transition: opacity 0.3s;
  padding: 20px 30px;
  font-size: 12px;
  line-height: 20px;
  margin-top: 20px;

  ${CollectionItemContainer}:hover & {
    opacity: 1;
  }

  @media screen and (max-width: 1100px) {
    font-size: 11px;
    padding: 10px 20px;
  }

  @media screen and (max-width: 650px) {
    line-height: 15px;
  }
`;

export const CollectionImage = styled.img`
  width: 100%;
  height: 95%;
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
  transition: all 0.2s;
  background-image: url(${getImageUrl});
  border-radius: 20px;

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const ItemFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 14px;

  @media screen and (max-width: 800px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

export const CustomButtonStyled = styled(CustomButton)`
  width: 80% !important;
  opacity: 0;
  position: absolute;
  top: 255px;
  visibility: hidden;
  transition: all 0.3s;
  outline: none;

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
    visibility: visible;
  }

  @media screen and (max-width: 800px) {
    top: 225px;
  }

  @media screen and (max-width: 600px) {
    visibility: visible;
    opacity: 0.8;
    font-size: 12px;
    max-width: 80%;
  }
`;
