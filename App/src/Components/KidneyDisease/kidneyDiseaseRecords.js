import React from 'react';
import { Table } from 'antd';
import kidneyDiseaseColumns from '../../Shared/Constants/KidneyDisease/kidneyDiseaseColumns';

const KidneyDiseaseRecords = (props) => {
    const { kidneyDiseaseReadings } = props;

    return (
        <Table rowKey={record => record.id} dataSource={kidneyDiseaseReadings} columns={kidneyDiseaseColumns} />
    );
};

export default KidneyDiseaseRecords;