/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import * as api from '../../apis/apis';
import Map from '../../components/Map/Map';

class MapBuilder extends Component {
    state: {
        locations: [],
        allLocations: [],
        query: '',
    };

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 23.7814042, lng: 90.3977987 },
            zoom: 14,
        });
        window.googleMapObject = map;
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
            // the map API is already be loaded (from a previous button click, maybe)
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

    render() {
        this.injectScriptTag();

        return (
            <div>
                <Map />
            </div>
        );
    }
}

export default MapBuilder;
