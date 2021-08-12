import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.h1`
  font-family: 'Indie Flower', sans-serif;
  letter-spacing: 3px;
  width: min-content;
  margin: 10px 20px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  transition: all 0.3s;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const CollectionPreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 10px;
  }
`;
