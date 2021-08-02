import React from 'react';
import { PageHeader } from 'antd';

const CalculatorHeader = (props) => {
    const { title } = props;

    return (
        <PageHeader title={title} />
    );
};

export default CalculatorHeader;