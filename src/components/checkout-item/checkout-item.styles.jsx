import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 18px;
`;

export const CheckoutImageContainer = styled.img`
    width: 100%;
    height: 100%;
`;

export const CheckoutQuantityButton = styled.button`
    cursor: pointer;
    background: none;
    display: inline-block;
    font-size: inherit;
    text-align: center;
    border: none;
    outline: none;

    &:hover {
        opacity: .7;
    }
    }
`;

export const CheckoutRemoveButton = styled.button`
    cursor: pointer;
    background: none;
    display: inline-block;
    font-size: inherit;
    font-weight: bolder;
    text-align: center;
    border: none;
    outline: none;

    &:hover {
        opacity: .7;
    }
`;