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
  width: min-content;
  cursor: pointer;
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
