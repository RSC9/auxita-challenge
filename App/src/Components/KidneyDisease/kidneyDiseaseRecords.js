import React from 'react';
import { Table } from 'antd';
import kidneyDiseaseColumns from '../../Shared/Constants/KidneyDisease/kidneyDiseaseColumns';
import { getTwoConsecutiveItems } from '../../Shared/Helpers/arrays';

const KidneyDiseaseRecords = (props) => {
    const { kidneyDiseaseReadings } = props;

    const expandedRowRender = (reading) => {
        const currentItem = kidneyDiseaseReadings.indexOf(reading);
        const data = getTwoConsecutiveItems(currentItem, kidneyDiseaseReadings);

        return (
            <Table rowKey={record => record.id} columns={kidneyDiseaseColumns} dataSource={data} pagination={false} size="small" />
        );
    };

    return (
        <Table
            rowKey={record => record.id}
            dataSource={kidneyDiseaseReadings}
            columns={kidneyDiseaseColumns}
            expandable={{ expandedRowRender }}
        />
    );
};

export default KidneyDiseaseRecords;