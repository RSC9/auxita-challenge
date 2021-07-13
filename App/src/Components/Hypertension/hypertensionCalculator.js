import React, { useEffect } from 'react';
import { getHypertension } from '../../Services/HypertensionService';

const HypertensionCalculator = (props) => {
    const [ hypertensionReadings, sethypertensionReadings ] = React.useState([]);

    async function fetchHypertension() {
        const hypertension = await getHypertension();

        console.log('+VESFLIP+', hypertension);
    }

    useEffect(() => {
        fetchHypertension();        
    })

    return (
        <div>+VESFLIP+</div>
    );
};

export default HypertensionCalculator;