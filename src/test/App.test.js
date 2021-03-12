import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Test app router', () => {
    test('should display <App />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    })
});