import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 40px;
  color: white;
  font-family: 'Indie Flower', sans-serif;
  text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

export const StyledList = styled.ul`
  width: 50%;
  font-size: 18px;
  color: white;
  margin: 0px auto 50px;
  line-height: 30px;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  list-style-type: none;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 75%;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
    margin-bottom: 20px;
    line-height: 18px;
    width: 100%;
    text-align: left;
  }
`;

export const CollectionTitle = styled.h2`
  font-family: 'Indie Flower', sans-serif;
  letter-spacing: 3px;
  font-size: 30px;
  width: min-content;
  margin: 10px 20px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
    font-size: 16px;
    width: 100%;
    align-self: center;
    text-align: center;
  }
`;
