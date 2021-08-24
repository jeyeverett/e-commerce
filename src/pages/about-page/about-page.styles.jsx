import styled from 'styled-components';

export const AboutPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  @media screen and (max-width: 1000px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
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
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 600px) {
      height: 200px;
    }

    @media screen and (max-width: 400px) {
      height: 150px;
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    font-size: 10px;
  }

  .title {
    font-family: 'Indie Flower', sans-serif;
    font-size: 24px;
    margin: 15px 0;
    color: white;
    font-weight: normal;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
`;
