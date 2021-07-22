import React from 'react';
import { Tag } from 'antd';
import { classificateGlomerularFiltration } from '../../Helpers/KidneyDisease/classifications';

const columns = [
    {
        title: 'Estimated Glomerular Filtration Rate (eGFR)',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    },
    {
        title: 'Classification',
        dataIndex: 'classification',
        render: (text, record) => {
            const classification = classificateGlomerularFiltration(record.eGFR);

            return (
                <Tag color={classification.color}>
                   {classification.text} 
                </Tag>
            );
        }
    }
];

export const consecutiveseGFRColumns = [
    {
        title: 'Two consecutives eGFR readings',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    }
];

export const consecutiveseGFRColumnsVesflip = {
    twoConsecutiveReadings: {
        title: 'Two consecutives eGFR readings',
        dataIndex: 'eGFR',
        key: 'eGFR'
    },
    atDate: {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    },
    eGFRClassification: {
        title: 'eGFR Classification',
        key: 'eGFRClassification'
    }
};

export default columns;