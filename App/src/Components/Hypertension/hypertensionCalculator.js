import React, { useEffect } from 'react';
import HypertensionInputs from './hypertensionInputs';
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
    }, [])

    return (
        <React.Fragment>+VESFLIP+
            <HypertensionInputs />
            <HypertensionRecords hypertensionReadings={hypertensionReadings} />
        </React.Fragment>
    );
};

export default HypertensionCalculator;