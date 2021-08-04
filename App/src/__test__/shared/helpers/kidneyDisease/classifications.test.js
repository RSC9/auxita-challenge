import React from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';
import { classificateGlomerularFiltration, geteGFRPercentChange } from '../../../../Shared/Helpers/KidneyDisease/classifications';

describe('Kidney Disease classifications', () => {

    test('check Glomerular Filtration', () => {
        const eGFR = 65;

        expect(classificateGlomerularFiltration(eGFR)).toEqual({ text: 'Mildly Decreased', color: 'blue' });
    })

    test('check eGFR Percentage', () => {
        const eGFRInitial = 70;
        const eGFRFinal = 65;

        expect(geteGFRPercentChange(eGFRInitial, eGFRFinal)).toEqual({ title: 'Decrease', value: 7.14, preffix: <ArrowDownOutlined /> });
    });
});