import React, { useEffect } from 'react';
import HypertensionInputs from '../../Components/Hypertension/hypertensionInputs';
import HypertensionRecords from '../../Components/Hypertension/hypertensionRecords';
import { getHypertension, addHypertensionReading } from '../../Services/HypertensionService';

const HypertensionCalculator = (props) => {
    const [ hypertensionReadings, sethypertensionReadings ] = React.useState([]);

    async function addReading(reading) {
        console.log('+addHypertensionReading+', props);

        const newReading = {
            SysBP: reading.SysBP,
            DiaBP: reading.DiaBP,
            atDate: reading.atDate
        };

        sethypertensionReadings([...hypertensionReadings, await addHypertensionReading(newReading)]);
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
            <HypertensionInputs addReading={addReading} />
            <HypertensionRecords hypertensionReadings={hypertensionReadings} />
        </React.Fragment>
    );
};

export default HypertensionCalculator;