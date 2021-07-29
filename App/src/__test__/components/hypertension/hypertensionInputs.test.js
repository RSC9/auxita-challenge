import React from 'react';
import { mount } from 'enzyme';
import HypertensionInputs from '../../../Components/Hypertension/hypertensionInputs';

describe('<HypertensionInputs />', () => {

    test('Render of HypertensionInputs component', () => {
        const hypertensionInputs = mount(<HypertensionInputs />);

        expect(hypertensionInputs.length).toEqual(1);
    });
});
