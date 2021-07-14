import React, { useEffect } from 'react';
import HypertensionInputs from '../../Components/Hypertension/hypertensionInputs';
import HypertensionRecords from '../../Components/Hypertension/hypertensionRecords';
import { getHypertension } from '../../Services/HypertensionService';

const HypertensionCalculator = (props) => {
    const [ hypertensionReadings, sethypertensionReadings ] = React.useState([]);

    const addHypertensionReading = (props) => {
        console.log('+addHypertensionReading+', props);

    };

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
            <HypertensionInputs addHypertensionReading={addHypertensionReading} />
            <HypertensionRecords hypertensionReadings={hypertensionReadings} />
        </React.Fragment>
    );
};

export default HypertensionCalculator;