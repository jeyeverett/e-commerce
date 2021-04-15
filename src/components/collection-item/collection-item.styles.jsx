import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px; 
    align-items: center;
    position: relative;
`;

const getImageUrl = item => {
    return item.imageUrl
}

export const CollectionImage = styled.img`
    width: 100%;
    height: 95%;
    background-position: center;
    background-size: cover;
    margin-bottom: 5px;
    transition: all .2s;
    background-image: url(${getImageUrl});
    cursor: pointer;

    ${CollectionItemContainer}:hover & {
        opacity: .8;
    }
`;

export const ItemFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CustomButtonStyled = styled(CustomButton)`
    width: 80%;
    opacity: 0;
    position: absolute;
    top: 255px;
    visibility: hidden;
    transition: opacity .5s;
    outline: none;

    ${CollectionItemContainer}:hover & {
        opacity: .8;
        visibility: visible
    }
`;