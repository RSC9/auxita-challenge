import React, { useEffect } from 'react';
import HypertensionRecords from './hypertensionRecords';
import { getHypertension } from '../../Services/HypertensionService';

const HypertensionCalculator = (props) => {
    const [ hypertensionReadings, sethypertensionReadings ] = React.useState([]);

    async function fetchHypertension() {
        const hypertension = await getHypertension();

        console.log('+VESFLIP+', hypertension);
        sethypertensionReadings(hypertension);
    }

    useEffect(() => {
        fetchHypertension();        
    })

    return (
        <div>+VESFLIP+
            <HypertensionRecords hypertensionReadings={hypertensionReadings}  />
        </div>
    );
};

export default HypertensionCalculator;