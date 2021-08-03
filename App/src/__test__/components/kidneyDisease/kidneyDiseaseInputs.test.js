//import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import KidneyDiseaseInputs from '../../../Components/KidneyDisease/kidneyDiseaseInputs';

describe('<KidneyDiseaseInputs />', () => {
    const addReading = jest.fn();
    const kidneyDiseaseInputs = mount(<KidneyDiseaseInputs addReading={addReading} />);

    test('Render of KidneyDiseaseInputs component', () => {
        expect(kidneyDiseaseInputs.length).toEqual(1);
    });

    test('Check the Add button', () => {
        kidneyDiseaseInputs.find('button').simulate('click');
        expect(addReading).toHaveBeenCalledTimes(1);
    });
});