export const classificateBloodPressure = (hypertensionReading) => {
    const { SysBP, DiaBP } = hypertensionReading;
    
    if (SysBP >= 180 && DiaBP >= 120) {
        return {
            text: 'Stage 3', color: 'red' 
        };        
    } else if ((SysBP >= 160 && SysBP < 180) || (DiaBP >= 100 && DiaBP < 110)) {
        return {
            text: 'Stage 2', color: 'yellow'
        };  
    } else if ((SysBP >= 140 && SysBP < 160) || (DiaBP >= 90 && DiaBP < 100)) {
        return {
            text: 'Stage 1', color: 'green'
        };  
    } else {
        return {
            text: 'No Hypertension', color: 'blue'
        };
    }
};