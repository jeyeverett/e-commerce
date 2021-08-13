import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .title {
    font-size: 52px;
    letter-spacing: 6px;
    font-family: 'Indie Flower', sans-serif;
    text-align: center;
    margin: 15px auto 50px;
    padding-bottom: 5px;
    width: min-content;
    color: white;

    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  }
`;

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 2%;
  grid-row-gap: 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NoCollectionContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
