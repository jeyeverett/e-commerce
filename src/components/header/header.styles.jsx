import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70px;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    font-size: 22px;
    cursor: pointer;
`;
