import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../__mocks__/matchMedia.mock';
import '../../__mocks__/cancelAnimation.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionCalculator from '../../Containers/HypertensionCalculator';

describe('<HypertensionCalculator />', () => {
    const hypertensionCalculator = mount(<HypertensionCalculator />);

    test('Render of HypertensionCalculator container', () => {
        expect(hypertensionCalculator.length).toEqual(1);
    });
});