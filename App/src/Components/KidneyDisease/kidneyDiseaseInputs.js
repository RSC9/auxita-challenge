import React, { useState } from 'react';
import { Form, InputNumber, DatePicker, Button } from 'antd';
import { defaultDateFormat } from '../../Shared/Constants/dateFormats';

const KidenyDiseaseInputs = (props) => {
    const { addReading } = props;

    const [eGFR, seteGFR] = useState('');
    const [atDate, setAtDate] = useState();

    return (
        <Form layout="inline">
            <Form.Item name="eGFR" label="eGFR" rules={[{ required: true, message: 'Please input a eGFR.' }]}>
                <InputNumber onChange={(numberValue => seteGFR(numberValue))} />
            </Form.Item>
            <Form.Item label="Date" name="atDate" rules={[{ required: true, message: 'Please input a Date.' }]}>
                <DatePicker format={defaultDateFormat} onChange={(momentDate, dateString) => setAtDate(dateString)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={() => addReading({ eGFR, atDate })}>
                    Add
                </Button>
            </Form.Item>
        </Form>
    );
};

export default KidenyDiseaseInputs;