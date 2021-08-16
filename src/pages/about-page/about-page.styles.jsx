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

  @media screen and (max-width: 1250px) {
    transform: rotate(-90deg);
    margin-top: -100px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const AboutContainer = styled.section`
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const AboutInfoContainer = styled.article`
  width: min-content;
  height: min-content;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
  align-items: center;
  justify-items: center;

  img {
    height: 250px;
    width: auto;
    border-radius: 10px;

    @media screen and (max-width: 400px) {
      height: 200px;
    }
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 30px;
  }
`;

export const AboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 12px;
  padding: 20px 40px;
  height: 250px;
  line-height: 20px;
  color: white;

  .title {
    font-family: 'Indie Flower', sans-serif;
    font-size: 24px;
    margin: 15px 0;
    color: white;
    font-weight: normal;
  }
`;
