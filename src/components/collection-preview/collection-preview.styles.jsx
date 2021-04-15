import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

export const CollectionTitle = styled.h1`
    width: min-content;
    margin-bottom: 25px;
    cursor: pointer;
`;

export const CollectionPreviewItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 4%;
`;