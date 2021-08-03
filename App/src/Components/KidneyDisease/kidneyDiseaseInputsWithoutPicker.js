import React, { useState } from 'react';
import { Form, InputNumber, DatePicker, Button } from 'antd';
import { defaultDateFormat } from '../../Shared/Constants/dateFormats';

const KidenyDiseaseInputsWithoutPicker = (props) => {
    const { addReading } = props;

    const [eGFR, seteGFR] = useState('');

    return (
        <Form layout="inline">
            <Form.Item name="eGFR" label="eGFR" rules={[{ required: true, message: 'Please input a eGFR.' }]}>
                <InputNumber onChange={(numberValue => seteGFR(numberValue))} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={() => addReading({ eGFR })}>
                    Add
                </Button>
            </Form.Item>
        </Form>
    );
};

export default KidenyDiseaseInputsWithoutPicker;