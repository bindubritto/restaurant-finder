import * as key from '../utils/keys';

export const googleMapApi = `https://maps.googleapis.com/maps/api/js?key=${key.API_KEY}&callback=initMap&libraries=&v=weekly`;

export const fourSquareApi = `https://api.foursquare.com/v2/venues/explore?ll=23.7814042,90.3977987&radius=2000&section=food&client_id=${key.CLIENT_ID}&client_secret=${key.CLIENT_SECRET}&v=20201216`;
