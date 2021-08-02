import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import KidneyDiseaseRecords from '../../../Components/KidneyDisease/kidneyDiseaseRecords';

describe('<KidneyDiseaseRecords />', () => {
    const kidneyDiseaseRecords = mount(<KidneyDiseaseRecords />);

    test('Render of HypertensionRecords component', () => {
        expect(kidneyDiseaseRecords.length).toEqual(1);
    });
});