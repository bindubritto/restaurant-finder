/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */

import axios from 'axios';
import React, { Component } from 'react';
import * as api from '../../apis/apis';
import Map from '../../components/Map/Map';
import RestaurantList from '../../components/RestaurantList/RestaurantList';

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
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 23.7814042, lng: 90.3977987 },
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
            // console.log('venue', locations[i].venue);
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

    render() {
        this.injectScriptTag();

        const { locations, query } = this.state || {};
        console.log(locations);

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
