//import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import KidneyDiseaseHeader from '../../../Shared/Components/calculatorHeader';

describe('<KidneyDiseaseHeader />', () => {
    const kidneyDiseaseHeader = mount(<KidneyDiseaseHeader title={'Kidney Disease calculator'} />);

    test('Render of KidneyDiseaseHeader component', () => {
        expect(kidneyDiseaseHeader.length).toEqual(1);
    });

    test('Render of title', () => {
        expect(kidneyDiseaseHeader.find(".ant-page-header-heading-title").text()).toEqual("Kidney Disease calculator");
    });
});