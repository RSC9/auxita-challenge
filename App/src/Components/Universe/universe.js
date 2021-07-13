import React, { useEffect } from 'react';
import { getUniverse } from '../../Services/UniverseService';
import Cell from '../Cell/cell';

const Universe = (props) => {
    const [universe, setUniverse] = React.useState([]);

    const buildUniverseHandler = () => {
        return (
            universe.map((row, i) => (
                <div key={i}>
                    {row.map((col, j) => (
                        <React.Fragment key={j}>
                            <Cell cellStatus={col} />
                        </React.Fragment>
                    ))}
                </div>
            ))
        );
    };

    async function fetchUniverse() {
        setUniverse(await getUniverse());
    };

    useEffect(() => {
        setInterval(fetchUniverse, 2000);
    }, []);

    return (
        <div>
            {buildUniverseHandler()}
        </div>
    );
};

export default Universe;