import React, { useEffect } from 'react';
import KidenyDiseaseInputs from '../../Components/KidneyDisease/kidneyDiseaseInputs';

const KidenyDiseaseCalculator = (props) => {

    async function addReading(reading) {
        console.log('+addKidneyDiseaseReading+', props);

    };

    return (
        <React.Fragment>+GOD+
            <KidenyDiseaseInputs addReading={addReading} />
        </React.Fragment>
    );
};

export default KidenyDiseaseCalculator;