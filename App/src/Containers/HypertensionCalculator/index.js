import React, { useEffect } from 'react';
import '../../Shared/Styles/calculators.css';
import CalculatorHeader from '../../Shared/Components/calculatorHeader';
import HypertensionInputs from '../../Components/Hypertension/hypertensionInputs';
import HypertensionRecords from '../../Components/Hypertension/hypertensionRecords';
import { getHypertension, addHypertensionReading } from '../../Services/HypertensionService';
import { sortObjectArrayByAscendingDate } from '../../Shared/Utils/arrays';

const HypertensionCalculator = (props) => {
    const [hypertensionReadings, sethypertensionReadings] = React.useState([]);

    async function addReading(reading) {
        const newReading = {
            SysBP: reading.SysBP,
            DiaBP: reading.DiaBP,
            atDate: reading.atDate
        };
        const hypertension = [...hypertensionReadings, await addHypertensionReading(newReading)];
        const sortedHypertension = sortObjectArrayByAscendingDate(hypertension);

        sethypertensionReadings(sortedHypertension);
    };

    async function fetchHypertension() {
        const hypertension = await getHypertension();
        const sortedHypertension = sortObjectArrayByAscendingDate(hypertension);

        sethypertensionReadings(sortedHypertension);
        
    }

    useEffect(() => {
        fetchHypertension();        
    }, [])

    return (
        <React.Fragment>
            <div className="pageHeader-wrapper">
                <CalculatorHeader
                    title="Hypertension calculator"
                />
                <HypertensionInputs addReading={addReading} />
                <HypertensionRecords hypertensionReadings={hypertensionReadings} />
            </div>
        </React.Fragment>
    );
};

export default HypertensionCalculator;