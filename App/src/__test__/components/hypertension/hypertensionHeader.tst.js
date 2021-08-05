// import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionHeader from '../../../Shared/Components/calculatorHeader'

describe('<HypertensionHeader />', () => {
    const hypertensionHeader = mount(<HypertensionHeader title={'Hypertension calculator'} />);

    test('Render of HypertensionHeader component', () => {
        expect(hypertensionHeader.length).toEqual(1);
    });

    test('Render of title', () => {
        expect(hypertensionHeader.find(".ant-page-header-heading-title").text()).toEqual("Hypertension calculator");
    });
});