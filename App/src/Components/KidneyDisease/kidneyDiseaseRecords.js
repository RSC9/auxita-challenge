import React from 'react';
import { Table } from 'antd';
import kidneyDiseaseColumns, { consecutiveseGFRColumns, consecutiveseGFRColumnsVesflip } from '../../Shared/Constants/KidneyDisease/kidneyDiseaseColumns';
import { getTwoConsecutiveItems } from '../../Shared/Helpers/arrays';

const { Column } = Table;

const KidneyDiseaseRecords = (props) => {
    const { kidneyDiseaseReadings } = props;

    const expandedRowRender0 = (reading) => {
        const currentItem = kidneyDiseaseReadings.indexOf(reading);
        const data = getTwoConsecutiveItems(currentItem, kidneyDiseaseReadings);

        return (
            <Table rowKey={record => record.id} columns={consecutiveseGFRColumns} dataSource={data} pagination={false} size="small" />
        );
    };

    const expandedRowRender = (reading) => {
        console.log('+Katia+', reading);
        const currentItem = kidneyDiseaseReadings.indexOf(reading);
        const data = getTwoConsecutiveItems(currentItem, kidneyDiseaseReadings);


        return (
            <Table dataSource={data} rowKey={record => record.id} size="small">
                <Column 
                    title={consecutiveseGFRColumnsVesflip.twoConsecutiveReadings.title}
                    dataIndex={consecutiveseGFRColumnsVesflip.twoConsecutiveReadings.dataIndex}
                    key={consecutiveseGFRColumnsVesflip.twoConsecutiveReadings.key}
                />
                <Column 
                    title={consecutiveseGFRColumnsVesflip.atDate.title}
                    dataIndex={consecutiveseGFRColumnsVesflip.atDate.dataIndex}
                    key={consecutiveseGFRColumnsVesflip.atDate.key}
                />
                <Column 
                    title={consecutiveseGFRColumnsVesflip.eGFRClassification.title}
                    key={consecutiveseGFRColumnsVesflip.eGFRClassification.key}
                    render={(a, b, c, d) => {
                        console.log('`+Lord I need YOU+`', reading);
                        console.log('`+ThanksGOD+`', a);

                        const res = (a.eGFR * 100) / (reading.eGFR);

                        return (
                            <div>+VESFLIP+{res}</div>
                        );
                    }}
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