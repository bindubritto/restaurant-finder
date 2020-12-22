/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Restaurant from './Restaurant/Restaurant';
import classes from './RestaurantList.module.css';

const RestaurantList = ({ locations = [], showMarkerInfo, queryString = '', handleChange }) => (
    <div className={classes.list}>
        <h2>Resturant List</h2>
        {/* <p>{queryString}</p> */}
        <input
            type="text"
            value={queryString || ''}
            onChange={(e) => handleChange(e.target.value)}
        />
        {/* onClick={() => showMarkerInfo(loc)} */}
        {locations.map((location) => (
            <Restaurant
                location={location}
                showMarkerInfo={showMarkerInfo}
                key={location.venue.id}
            />
        ))}
        {/* <ol>
            {locations.map((loc) => (
                <li key={loc.venue.id}>
                    <div>
                        <h4>
                            Name:
                            <a href="#" onClick={() => showMarkerInfo(loc)}>
                                {loc.venue.name}
                            </a>
                        </h4>
                        <p>Address: {loc.venue.location.address}</p>
                    </div>
                </li>
            ))}
        </ol> */}
    </div>
);

export default RestaurantList;
