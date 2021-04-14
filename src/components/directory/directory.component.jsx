import React from 'react';
import './directory.styles.scss';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...sectionProps}) => (
                //We take id out and spread the rest of our section props instead of passing each one individually, since we want access to all of them
                <MenuItem key={id} { ...sectionProps } />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({ 
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);