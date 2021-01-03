/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */

import axios from 'axios';
import React, { Component } from 'react';
import * as api from '../../apis/apis';
import Map from '../../components/Map/Map';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import * as key from '../../utils/keys';

class MapBuilder extends Component {
    state: {
        locations: [],
        allLocations: [],
        query: '',
    };

    mapMarkers = [];

    componentDidMount = () => {
        axios.get(api.fourSquareApi).then((result) =>
            this.setState({
                locations: result.data.response.groups[0].items,
                allLocations: result.data.response.groups[0].items,
            })
        );
    };

    initMap = () => {
        const latitude = parseFloat(`${key.latitude}`);
        const longitude = parseFloat(`${key.longitude}`);
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            zoom: 14,
        });
        window.googleMapObject = map;

        // For making infoWindow
        const infoWindow = new window.google.maps.InfoWindow();
        window.infoWindow = infoWindow;
    };

    createMapScript = () => {
        const script = document.createElement('script');
        script.id = 'google-map-script';
        script.src = api.googleMapApi;
        script.defer = true;
        return script;
    };

    injectScriptTag = () => {
        if (window.google && window.google.maps) {
            this.initMap();
        } else if (!document.getElementById('google-map-script')) {
            const mapScriptEl = this.createMapScript();
            const allScriptTags = document.getElementsByTagName('script');
            const firstScriptElement = allScriptTags[0];
            const parentHead = firstScriptElement.parentNode;
            parentHead.insertBefore(mapScriptEl, firstScriptElement);
            window.initMap = this.initMap;
        }
    };

    addMarkers = (locations) => {
        for (let i = 0; i < locations.length; i += 1) {
            const marker = new window.google.maps.Marker({
                position: {
                    lat: locations[i].venue.location.lat,
                    lng: locations[i].venue.location.lng,
                },
                map: window.googleMapObject, // On which map I want to place this marker.
                title: locations[i].venue.id,
            });

            marker.addListener('click', () => {
                const content = this.prepareContent(locations[i]);
                window.infoWindow.setContent(content);
                window.infoWindow.open(window.googleMapObject, marker);
            });

            this.mapMarkers.push(marker);
        }

        window.mapMarkers = this.mapMarkers;
    };

    prepareContent = (location) =>
        `<div >
        <h4 > <a className={classes.textRight} href="#">${location.venue.name}</a></h4>
        <p>Address: ${location.venue.location.address || 'Not Available'}</p>
        </div>`;

    handleClick = (location) => {
        for (let i = 0; i < window.mapMarkers.length; i += 1) {
            if (location.venue.id === window.mapMarkers[i].title) {
                const content = this.prepareContent(location);
                window.infoWindow.setContent(content);
                window.infoWindow.open(window.googleMapObject, window.mapMarkers[i]);
            }
        }
    };

    handleChange = (input) => {
        this.setState({ query: input });
        const { allLocations } = this.state;
        if (input) {
            const filteredLocations = this.filterLocation(input, allLocations);
            this.setState({ locations: filteredLocations });
        } else {
            this.setState({ locations: allLocations });
        }
    };

    filterLocation = (input, locations) =>
        locations.filter((location) => location.venue.name.toLowerCase().includes(input));

    render() {
        this.injectScriptTag();
        const { locations, query } = this.state || {};

        if (locations !== undefined) {
            this.addMarkers(locations);
        }

        return (
            <div>
                <RestaurantList
                    locations={locations}
                    showMarkerInfo={this.handleClick}
                    queryString={query}
                    handleChange={this.handleChange}
                />
                <Map />
            </div>
        );
    }
}

export default MapBuilder;
