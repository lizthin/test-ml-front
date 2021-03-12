import React from 'react';
import { shallow } from 'enzyme';
import ItemsRouter from '../../../../pages/Items/routes/ItemsRouter';


describe('Test ItemsRouter', () => {
    test('should display ItemsRouter', () => {
        const wrapper = shallow(<ItemsRouter parentHistory={{ history: {} }} />);
        expect(wrapper).toMatchSnapshot();
    })
})