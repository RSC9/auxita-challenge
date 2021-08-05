import '../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import SiderLayout from '../../Containers/Layout';

describe('<SiderLayout />', () => {
    const siderLayout = mount(<SiderLayout />);

    test('Render of SiderLayout container', () => {
        expect(siderLayout.length).toEqual(1);
    });

    beforeEach(() => {
        Object.defineProperty(window, 'cancelAnimationFrame', {
            writable: true,
            value: jest.fn().mockImplementation(cb => cb())
        });
      });
});