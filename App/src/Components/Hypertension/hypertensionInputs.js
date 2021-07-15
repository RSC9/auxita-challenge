import React,  { useState } from 'react';
import { Form, Input, InputNumber, DatePicker, Button } from 'antd';
import moment from 'moment';
import { defaultDateFormat } from '../../Shared/Constants/dateFormats';

const HypertensionInputs = (props) => {
    const { addReading } = props;

    const [SysBP, setSysBP] = useState('');
    const [DiaBP, setDiaBP] = useState('');
    const [atDate, setAtDate] = useState(moment());

    return (
        <Form
            layout="inline"
            onFinish={() => addReading({ SysBP, DiaBP, atDate })}
        >
            <Form.Item label="SysBP">
                <InputNumber value={SysBP} onChange={(numberValue) => setSysBP(numberValue)} />
            </Form.Item>
            <Form.Item label="DiaBP">
                <InputNumber value={DiaBP} onChange={(numberValue) => setDiaBP(numberValue)} />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker defaultValue={atDate} format={defaultDateFormat} onChange={(momentDate, dateString) => setAtDate(dateString)} />
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