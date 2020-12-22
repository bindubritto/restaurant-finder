/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Restaurant from './Restaurant/Restaurant';
import classes from './RestaurantList.module.css';
import Search from './Search/Search';

const RestaurantList = ({ locations = [], showMarkerInfo, queryString = '', handleChange }) => (
    <div className={classes.list}>
        <h2>Resturant List</h2>

        {locations.length > 1 && <p>{locations.length} shops found</p>}
        {locations.length === 0 && <p>No shop found</p>}
        {locations.length === 1 && <p>1 shop found</p>}

        <Search queryString={queryString} handleChange={handleChange} />

        {locations.map((location) => (
            <Restaurant
                location={location}
                showMarkerInfo={showMarkerInfo}
                key={location.venue.id}
            />
        ))}
    </div>
);

export default RestaurantList;
