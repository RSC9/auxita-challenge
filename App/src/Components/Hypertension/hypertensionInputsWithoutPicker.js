import React,  { useState } from 'react';
import { Form, InputNumber, DatePicker, Button } from 'antd';

const HypertensionInputsWithoutPicker = (props) => {
    const { addReading } = props;

    const [SysBP, setSysBP] = useState('');
    const [DiaBP, setDiaBP] = useState('');

    return (
        <Form layout="inline">
            <Form.Item label="SysBP" name="SysBP" rules={[{ required: true, message: 'Please input a SysBP.' }]}>
                <InputNumber onChange={(numberValue) => setSysBP(numberValue)} />
            </Form.Item>
            <Form.Item label="DiaBP" name="DiaBP" rules={[{ required: true, message: 'Please input a DiaBP.' }]}>
                <InputNumber onChange={(numberValue) => setDiaBP(numberValue)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={() => addReading({ SysBP, DiaBP })}>
                    Add
                </Button>
            </Form.Item>
        </Form>
    );

};

export default HypertensionInputsWithoutPicker;