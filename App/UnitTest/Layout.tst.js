import React from 'react';
import SiderLayout from '../src/Containers/Layout';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ReactJS', () => {
    test('text', () => {
        const data = { title: 'Auxita' };
        const wrapper = mount(
            <SiderLayout />
        );
        const h1 = wrapper.find(h1);
        expect(h1.text()).toBe('Auxita');
    });
});