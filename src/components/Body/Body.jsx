import React from 'react';
import MapBuilder from '../../containers/MapBuilder/MapBuilder';
import classes from './Body.module.css';

const Body = () => (
    <div className={classes.mainBody}>
        <MapBuilder />
    </div>
);

export default Body;
