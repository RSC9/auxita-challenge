import React, { useEffect } from 'react';
import '../../Shared/Styles/calculators.css';
import CalculatorHeader from '../../Shared/Components/calculatorHeader';
import KidenyDiseaseInputs from '../../Components/KidneyDisease/kidneyDiseaseInputs';
import KidneyDiseaseRecords from '../../Components/KidneyDisease/kidneyDiseaseRecords';
import { getKidneyDisease, addKidneyDiseaseReading } from '../../Services/KidneyDiseaseService';
import { sortObjectArrayByDate } from '../../Shared/Util/arrays';

const KidenyDiseaseCalculator = (props) => {
    const [kidneyDiseaseReadings, setKidneyDiseaseReadings] = React.useState([]);

    async function addReading(reading) {
        const newReading = {
            eGFR: reading.eGFR,
            atDate: reading.atDate

        };
        const kidneyDisease = [...kidneyDiseaseReadings, await addKidneyDiseaseReading(newReading)];
        const sortedKidneyDisease = sortObjectArrayByDate(kidneyDisease);

        setKidneyDiseaseReadings(sortedKidneyDisease);
    };

    async function fetchKidneyDisease() {
        const kidneyDisease = await getKidneyDisease();
        const sortedKidneyDisease = sortObjectArrayByDate(kidneyDisease);

        setKidneyDiseaseReadings(sortedKidneyDisease);
    }

    useEffect(() => {
        fetchKidneyDisease();        
    }, [])

    return (
        <React.Fragment>
            <div className="pageHeader-wrapper">
                <CalculatorHeader
                    title="Kidney Disease calculator"                    
                />
                <KidenyDiseaseInputs addReading={addReading} />
                <KidneyDiseaseRecords kidneyDiseaseReadings={kidneyDiseaseReadings} />
            </div>
        </React.Fragment>
    );
};

export default KidenyDiseaseCalculator;