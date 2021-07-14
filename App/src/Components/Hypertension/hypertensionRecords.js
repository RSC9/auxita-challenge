import React from 'react';
import { Table } from 'antd';
import hypertensionColumns from '../../Shared/Constants/Hypertension/hypertensionColumns'

const HypertensionRecords = (props) => {
    const { hypertensionReadings } = props;


    return (
        <Table dataSource={hypertensionReadings} columns={hypertensionColumns} />
    );
};

export default HypertensionRecords; 