import styled from 'styled-components';

export const AboutPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  color: white;
  font-family: 'Indie Flower', sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const AboutImageContainer = styled.div`
  width: 408px;
  height: 611px;
  background-image: url('https://res.cloudinary.com/dnpfrwpiq/image/upload/v1628892351/carrotcart/carrotbunch_oj4n7k.png');
  filter: opacity(0.9);
  position: absolute;
  top: 250px;
  left: 150px;
`;
