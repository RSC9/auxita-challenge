//import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionInputs from '../../../Components/Hypertension/hypertensionInputsWithoutPicker';

describe('<HypertensionInputs />', () => {
    const addReading = jest.fn();
    const hypertensionInputs = mount(<HypertensionInputs addReading={addReading} />);

    test('Render of HypertensionInputs component', () => {
        expect(hypertensionInputs.length).toEqual(1);
    });

    test('Check the Add button', () => {
        hypertensionInputs.find('button').simulate('click');
        expect(addReading).toHaveBeenCalledTimes(1);
    });
});
