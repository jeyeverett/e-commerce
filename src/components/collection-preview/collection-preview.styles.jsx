import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const CollectionPreviewItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
