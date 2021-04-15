import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, MenuItemContent } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <MenuItemContainer size={size} >
        <BackgroundImageContainer imageUrl={imageUrl} />
        <MenuItemContent onClick={() => history.push(`${match.url}${linkUrl}`)}> 
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </MenuItemContent>
    </MenuItemContainer>
);

export default withRouter(MenuItem);