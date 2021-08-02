import 'jsdom-global/register'; //at the top of file , even  , before importing react
import '../../../__mocks__/matchMedia.mock';
import React from 'react';
import { mount } from 'enzyme';
import HypertensionRecords from '../../../Components/Hypertension/hypertensionRecords';

describe('<HypertensionRecords />', () => {
    const hypertensionRecords = mount(<HypertensionRecords />);

    test('Render of HypertensionRecords component', () => {
        expect(hypertensionRecords.length).toEqual(1);
    });
});