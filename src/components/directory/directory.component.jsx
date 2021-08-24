import React from 'react';
import { DirectoryContainer } from './directory.styles';
import { StyledH1, StyledList } from '../../generalstyles';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';

const Directory = ({ sections }) => (
  <>
    <StyledH1>
      Sustainably grown local produce - and other natural stuff!
    </StyledH1>
    <StyledList>
      <li>Welcome to the home of your freshest locally grown produce!</li>
    </StyledList>
    <StyledList>
      <li>Browse our selection and place your order - no sign up required!</li>
      <li>
        <small>
          Create an account to see your past orders and get access to exclusive
          offers
        </small>
      </li>
    </StyledList>
    <DirectoryContainer>
      {sections.map(({ id, ...sectionProps }) => (
        //We take id out and spread the rest of our section props instead of passing each one individually, since we want access to all of them
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
