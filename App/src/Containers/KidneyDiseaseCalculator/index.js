import React, { useEffect } from 'react';
import '../../Shared/Styles/calculators.css';
import { PageHeader } from 'antd';
import KidenyDiseaseInputs from '../../Components/KidneyDisease/kidneyDiseaseInputs';
import KidneyDiseaseRecords from '../../Components/KidneyDisease/kidneyDiseaseRecords';
import { getKidneyDisease, addKidneyDiseaseReading } from '../../Services/KidneyDiseaseService';
import { sortObjectArrayByDate } from '../../Shared/Util/arrays';

const KidenyDiseaseCalculator = (props) => {
    const [kidneyDiseaseReadings, setKidneyDiseaseReadings] = React.useState([]);

    async function addReading(reading) {
        console.log('+addKidneyDiseaseReading+', reading);
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
        console.log('`+VESFLIP+`', kidneyDisease);
        const sortedKidneyDisease = sortObjectArrayByDate(kidneyDisease);

        setKidneyDiseaseReadings(sortedKidneyDisease);
    }

    useEffect(() => {
        fetchKidneyDisease();        
    }, [])

    return (
        <React.Fragment>+GOD+
            <div className="pageHeader-wrapper">
                <PageHeader
                    title="Kidney Disease calculator"
                >
                    <KidenyDiseaseInputs addReading={addReading} />
                </PageHeader>
                <KidneyDiseaseRecords kidneyDiseaseReadings={kidneyDiseaseReadings} />
            </div>
        </React.Fragment>
    );
};

export default KidenyDiseaseCalculator;