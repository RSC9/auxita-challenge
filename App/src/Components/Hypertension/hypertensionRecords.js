import React from 'react';
import { Table } from 'antd';
import hypertensionColumns from '../../Shared/Constants/Hypertension/hypertensionColumns'

const HypertensionRecords = (props) => {
    const { hypertensionReadings } = props;


    return (
        <Table rowKey={record => `${record.SysBP}${record.DiaBP}${record.atDate}`} dataSource={hypertensionReadings} columns={hypertensionColumns} />
    );
};

export default HypertensionRecords; 