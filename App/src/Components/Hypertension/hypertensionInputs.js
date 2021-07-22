import React,  { useState } from 'react';
import { Form, InputNumber, DatePicker, Button } from 'antd';
import { defaultDateFormat } from '../../Shared/Constants/dateFormats';

const HypertensionInputs = (props) => {
    const { addReading } = props;

    const [SysBP, setSysBP] = useState('');
    const [DiaBP, setDiaBP] = useState('');
    const [atDate, setAtDate] = useState();

    return (
        <Form
            layout="inline"
            onFinish={() => addReading({ SysBP, DiaBP, atDate })}
        >
            <Form.Item label="SysBP" name="SysBP" rules={[{ required: true, message: 'Please input a SysBP.' }]}>
                <InputNumber onChange={(numberValue) => setSysBP(numberValue)} />
            </Form.Item>
            <Form.Item label="DiaBP" name="DiaBP" rules={[{ required: true, message: 'Please input a DiaBP.' }]}>
                <InputNumber onChange={(numberValue) => setDiaBP(numberValue)} />
            </Form.Item>
            <Form.Item label="Date" name="atDate" rules={[{ required: true, message: 'Please input a Date.' }]}>
                <DatePicker format={defaultDateFormat} onChange={(momentDate, dateString) => setAtDate(dateString)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    );

};

export default HypertensionInputs;