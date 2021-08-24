import styled from 'styled-components';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  padding: 20px 80px;
  @media screen and (max-width: 1100px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;
