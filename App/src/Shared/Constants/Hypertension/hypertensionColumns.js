import React from 'react';
import { Tag } from 'antd';
import { classificateBloodPressure } from '../../Helpers/Hypertension/classification';

const columns = [
    {
        title: 'Systolic Blood Pressure (SysBP)',
        dataIndex: 'SysBP',
        key: 'SysBP'
    },
    {
        title: 'Diastolic Blood Pressure (DiaBP)',
        dataIndex: 'DiaBP',
        key: 'DiaBP'
    },
    {
        title: 'Date',
        dataIndex: 'atDate',
        key: 'atDate'
    },
    {
        title: 'BP Classification',
        key: 'bpClassification',
        render: (text, record) => {
            const classification = classificateBloodPressure(record);

            return (
                <Tag color={classification.color}>
                   {classification.text} 
                </Tag>
            );
        }
    }
];

export default columns;