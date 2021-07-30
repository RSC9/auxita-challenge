import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionInputsWithoutPicker from '../../../Components/Hypertension/hypertensionInputsWithoutPicker';

describe('<HypertensionInputsWithoutPicker />', () => {
    const hypertensionInputs = mount(<HypertensionInputsWithoutPicker />);

    test('Render of HypertensionInputsWithoutPicker component', () => {

        expect(hypertensionInputs.length).toEqual(1);
    });
});
