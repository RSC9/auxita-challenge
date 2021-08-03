import React from 'react';
import { Table, Statistic } from 'antd';
import kidneyDiseaseColumns, { consecutiveseGFRColumns } from '../../Shared/Constants/KidneyDisease/kidneyDiseaseColumns';
import { getTwoConsecutiveItems } from '../../Shared/Utils/arrays';
import { geteGFRPercentChange } from '../../Shared/Helpers/KidneyDisease/classifications';

const { Column } = Table;

const KidneyDiseaseRecords = (props) => {
    const { kidneyDiseaseReadings } = props;

    const expandedRowRender = (initialReading) => {
        const currentItem = kidneyDiseaseReadings.indexOf(initialReading);
        const data = getTwoConsecutiveItems(currentItem, kidneyDiseaseReadings);


        return (
            <Table dataSource={data} rowKey={record => record.id} pagination={false} size="small">
                <Column 
                    title={consecutiveseGFRColumns.twoConsecutiveReadings.title}
                    dataIndex={consecutiveseGFRColumns.twoConsecutiveReadings.dataIndex}
                    key={consecutiveseGFRColumns.twoConsecutiveReadings.key}
                />
                <Column 
                    key={consecutiveseGFRColumns.eGFRClassification.key}
                    render={(consecutiveRecord) => {
                        const percentChange = geteGFRPercentChange(initialReading.eGFR, consecutiveRecord.eGFR)

                        return (
                            <Statistic
                                title={percentChange.title}
                                value={percentChange.value}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={percentChange.preffix}
                                suffix="%"
                            />
                        );
                    }}
                />
                <Column 
                    title={consecutiveseGFRColumns.atDate.title}
                    dataIndex={consecutiveseGFRColumns.atDate.dataIndex}
                    key={consecutiveseGFRColumns.atDate.key}
                />
            </Table>            
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