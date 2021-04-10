import React from 'react';
import DIRECTORY_DATA from '../../directory.data';
import './directory.styles.scss';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: DIRECTORY_DATA
        }
    }

    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionProps}) => (
                        //We take id out amd spread the rest of our section props instead of passing each one individually, since we want access to all of them
                        <MenuItem key={id} { ...sectionProps } />
                    ))
                }
            </div>
        );
    }
}

export default Directory;