import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export const classificateGlomerularFiltration = (eGFR) => {
    if (eGFR >= 90) {
        return {
            text: 'Normal', color: 'gray'
        };
    } else if (eGFR >= 60 && eGFR <= 89) {
        return {
            text: 'Mildly Decreased', color: 'blue'
        };
    } else if (eGFR >= 45 && eGFR <= 59) {
        return {
            text: 'Mild to Moderate', color: 'green'
        };
    } else if (eGFR >= 30 && eGFR <= 44) {
        return {
            text: 'Moderate to Severe', color: 'yellow'
        };        
    } else if (eGFR >= 15 && eGFR <= 29) {
        return {
            text: 'Severely Decreased', color: 'orange'
        };        
    } else {
        return {
            text: 'Kidney Failure', color: 'red'
        };
    }
};

export const geteGFRPercentChange = (eGFRInitial, eGFRFinal) => {
    if (eGFRInitial > eGFRFinal) {
        const decrease = eGFRInitial - eGFRFinal;
        const percentage = (decrease / eGFRInitial) * 100;

        return { title: 'Decrease', value: parseFloat(percentage.toFixed(2)), preffix: <ArrowDownOutlined /> }
    } else if (eGFRInitial < eGFRFinal) {
        const increase = eGFRFinal - eGFRInitial;
        const percentage = (increase / eGFRInitial) * 100;
        
        return { title: 'Increase', value: parseFloat(percentage.toFixed(2)), preffix: <ArrowUpOutlined /> }
    }

    return {
        title: 'No change',
        value: 0,
        preffix: null
    };
};