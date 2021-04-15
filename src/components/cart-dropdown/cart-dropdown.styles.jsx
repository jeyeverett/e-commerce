import styled from 'styled-components';


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 80px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    
    &::-webkit-scrollbar{
        width: 4px;
        background-color: transparent;
    }
     
    &::-webkit-scrollbar-thumb{
        background-color: rgba(0,0,0,0.7);
        border-radius: 20px;
    }
`;

export const CartEmptyContainer = styled.span`
    margin: auto 0;
    font-size: 18px;
`;