import React,  { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';

const HypertensionInputs = (props) => {
    const { addHypertensionReading } = props;

    const [SysBP, setSysBP] = useState('');
    const [DiaBP, setDiaBP] = useState('');
    // const [atDate, setAtDate] = useState('21/09/1994')

    return (
        <Form
            layout="inline"
            onFinish={() => addHypertensionReading({ SysBP, DiaBP })}
        >
            <Form.Item label="SysBP">
                <InputNumber value={SysBP} onChange={(numberValue) => setSysBP(numberValue)} />
            </Form.Item>
            <Form.Item label="DiaBP">
                <InputNumber value={DiaBP} />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );

};

export default HypertensionInputs;