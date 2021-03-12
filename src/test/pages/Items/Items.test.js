import React from 'react';
import { shallow } from 'enzyme';
import Items from '../../../pages/Items/Items';


describe('Test Items', () => {
    test('should display component <ItemsRouter history={mockProperties} />', () => {
        const mockProperties = {
            location: {
                hash: "",
                key: "6ti0yy",
                pathname: "/items",
                search: "",
            },
            push: jest.fn()
        };
        const wrapper = shallow(<Items history={mockProperties} />);
        expect(wrapper).toMatchSnapshot();
    })
});