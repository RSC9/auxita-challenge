import '../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionCalculator from '../../Containers/HypertensionCalculator';

describe('<HypertensionCalculator />', () => {
    const hypertensionCalculator = mount(<HypertensionCalculator />);

    test('Render of HypertensionCalculator container', () => {
        expect(hypertensionCalculator.length).toEqual(1);
    });

    test('Render of header', () => {
        expect(hypertensionCalculator.find(".ant-page-header-heading-title").text()).toEqual("Hypertension calculator");
    });
});