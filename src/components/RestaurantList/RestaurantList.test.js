/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */

import { mount } from 'enzyme';
import React from 'react';
import RestaurantList from './RestaurantList';

describe('MyComponent', () => {
    const props = {
        queryString: 'tokyo',
        showMarkerInfo: jest.fn(),
        handleChange: jest.fn(),
        locations: [
            {
                venue: {
                    name: 'Sabbir',
                    location: {
                        address: 'Dhaka',
                    },
                },
            },
        ],
    };

    const component = mount(<RestaurantList  {...props} />); // Global

    it('should show header component correctly', () => {
        expect(component.find('h2').text()).toEqual('Resturant List');
    });

    it('should shows all component correctly', () => {
        expect(component.find('h2').length).toEqual(1);
        expect(component.find('Search').length).toEqual(1);
        expect(component.find('Restaurant').length).toEqual(props.locations.length);
    });


    it('should call expected function on change, correctly', () => {
        component.find('input').simulate('change', {target: {value: 'Dhaka'}});
        expect(props.handleChange).toHaveBeenCalled();
        expect(props.handleChange).toHaveBeenCalledWith('Dhaka');
    });

});