import React, { useEffect } from 'react';
import HypertensionInputs from '../../Components/Hypertension/hypertensionInputs';
import HypertensionRecords from '../../Components/Hypertension/hypertensionRecords';
import { getHypertension, addHypertensionReading } from '../../Services/HypertensionService';
import { sortObjectArrayByDate } from '../../Shared/Util/arrays';

const HypertensionCalculator = (props) => {
    const [hypertensionReadings, sethypertensionReadings] = React.useState([]);

    async function addReading(reading) {
        console.log('+addHypertensionReading+', props);
        const newReading = {
            SysBP: reading.SysBP,
            DiaBP: reading.DiaBP,
            atDate: reading.atDate
        };
        const hypertension = [...hypertensionReadings, await addHypertensionReading(newReading)];
        const sortedHypertension = sortObjectArrayByDate(hypertension);

        sethypertensionReadings(sortedHypertension);
    };

    async function fetchHypertension() {
        const hypertension = await getHypertension();
        const sortedHypertension = sortObjectArrayByDate(hypertension);

        console.log('+VESFLIP+', hypertension);
        //sethypertensionReadings(hypertension);
        sethypertensionReadings(sortedHypertension);
        
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