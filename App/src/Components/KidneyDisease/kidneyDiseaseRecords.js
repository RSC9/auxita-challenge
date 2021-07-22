import React from 'react';
import { Table } from 'antd';
import kidneyDiseaseColumns, { consecutiveseGFRColumns, consecutiveseGFRColumnsVesflip } from '../../Shared/Constants/KidneyDisease/kidneyDiseaseColumns';
import { getTwoConsecutiveItems } from '../../Shared/Util/arrays';

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
            <Table dataSource={data} rowKey={record => record.id} pagination={false} size="small">
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

                        // const res = 100 - ((a.eGFR * 100) / reading.eGFR);
                        //const res = ((a.eGFR * 100) / reading.eGFR) - 100;
                        const originalAmount = reading.eGFR;
                        let vesflip;
                        if (reading.eGFR > a.eGFR) {
                            const decreaseQuantity = reading.eGFR - a.eGFR;
                            
                            vesflip = (decreaseQuantity / originalAmount) * 100;                       
                        } else {
                            const increaseQuantity = a.eGFR - reading.eGFR;

                            vesflip = (increaseQuantity / originalAmount) * 100;
                        }

                        return (
                            <div>+VESFLIP+{vesflip}</div>
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