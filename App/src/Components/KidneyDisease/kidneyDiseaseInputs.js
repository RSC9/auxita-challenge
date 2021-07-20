import React, { useState } from 'react';
import { Form, InputNumber, DatePicker, Button } from 'antd';
import moment from 'moment';

import { defaultDateFormat } from '../../Shared/Constants/dateFormats';

const KidenyDiseaseInputs = (props) => {
    const { addReading } = props;

    const [eGFR, seteGFR] = useState('');
    const [atDate, setAtDate] = useState(moment());

    return (
        <Form
            layout="inline"
            onFinish={() => addReading({ eGFR, atDate })}
        >
            <Form.Item label="eGFR">
                <InputNumber value={eGFR} onChange={(numberValue => seteGFR(numberValue))} />
            </Form.Item>
            <Form.Item label="Date">
                <DatePicker defaultValue={atDate} format={defaultDateFormat} onChange={(momentDate, dateString) => setAtDate(dateString)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    );
};

export default KidenyDiseaseInputs;