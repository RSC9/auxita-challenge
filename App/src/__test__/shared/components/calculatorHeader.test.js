import React from 'react';
import { mount } from 'enzyme';
import CalculatorHeader from '../../../Shared/Components/calculatorHeader';

describe('<CalculatorHeader />', () => {
    const calculatorHeader = mount(<CalculatorHeader title="Auxita calculator" />);

    test('Render of CalculatorHeader component', () => {
        expect(calculatorHeader.length).toEqual(1);
    });

    test('Render of title', () => {
        expect(calculatorHeader.find(".ant-page-header-heading-title").text()).toEqual("Auxita calculator");
    });
});