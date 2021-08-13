import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    margin-top: 25px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  color: white;
  font-family: 'Indie Flower', sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
