import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import KidneyDiseaseInputs from '../../../Components/KidneyDisease/kidneyDiseaseInputsWithoutPicker';

describe('<KidneyDiseaseInputs />', () => {
    const kidneyDiseaseInputs = mount(<KidneyDiseaseInputs />);

    test('Render of KidneyDiseaseInputs component', () => {
        expect(kidneyDiseaseInputs.length).toEqual(1);
    });
});