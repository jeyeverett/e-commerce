import React from 'react';
import directoryData from '../../directory.data';
import './directory.styles.scss';

import MenuItem from '../../components/menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: directoryData
        }
    }

    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;