import '../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import KidneyDiseaseCalculator from '../../Containers/KidneyDiseaseCalculator';

describe('<KidneyDiseaseCalculator />', () => {
    const kidneyDiseaseCalculator = mount(<KidneyDiseaseCalculator />);

    test('Render of KidneyDiseaseCalculator container', () => {
        expect(kidneyDiseaseCalculator.length).toEqual(1);
    });

    test('Render of header', () => {
        expect(kidneyDiseaseCalculator.find(".ant-page-header-heading-title").text()).toEqual("Kidney Disease calculator");
    });
});