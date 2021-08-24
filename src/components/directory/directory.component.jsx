import React from 'react';
import { DirectoryContainer } from './directory.styles';
import { StyledH1 } from '../../generalstyles';

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
