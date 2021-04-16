import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    .title {
        font-size: 38px;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 25px;
    }
`;

export const CollectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 4%;
    grid-row-gap: 40px;
`;

export const NoCollectionContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
