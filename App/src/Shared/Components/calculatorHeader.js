import React from 'react';
import { PageHeader } from 'antd';

const CalculatorHeader = (props) => {
    const { title, children } = props;

    return (
        <PageHeader
            title={title}
        >
            {children}
        </PageHeader>
    );
};

export default CalculatorHeader;