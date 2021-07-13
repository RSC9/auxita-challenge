import React, { useEffect } from 'react';
import './cell.css';
import * as cellStatuses from '../../Shared/Constants/CellStatuses';

const Cell = (props) => {
    const [cellStatus, setCellStatus] = React.useState(cellStatuses.Dead.value);
    
    const getCellClassHandler = () => {
        if (cellStatus === cellStatuses.Alive.value) return cellStatuses.Alive.class;
        if (cellStatus === cellStatuses.Dead.value) return cellStatuses.Dead.class;
    };

    useEffect(() => {
        setCellStatus(props.cellStatus);
    }, [props.cellStatus]);

    return (
        <button disabled className={getCellClassHandler()}>
        </button>
    );
};

export default Cell;