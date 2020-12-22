/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Restaurant.module.css';

const Restaurant = ({ location, showMarkerInfo }) => (
    // console.log('location of resturant', location.venue.name);
    // <ol>
    //     <li key={location.venue.id}>

    //     </li>
    // </ol>

    <div className={classes.container}>
        <h4>
            <a href="#" onClick={() => showMarkerInfo(location)}>
                {location.venue.name}
            </a>
        </h4>
        <p>
            Address: <span>{location.venue.location.address || 'Not Available'}</span>
        </p>
    </div>
);
export default Restaurant;
