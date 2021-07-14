import React from 'react';
import { Form, Input, InputNumber, DatePicker } from 'antd';

const HypertensionInputs = (props) => {

    return (
        <Form
            layout="inline"
        >
            <Form.Item label="SysBP">
                <Input />
            </Form.Item>
            <Form.Item label="DiaBP">
            <InputNumber />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker />
            </Form.Item>
        </Form>
    );

};

export default HypertensionInputs;