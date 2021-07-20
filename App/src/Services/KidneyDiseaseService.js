export async function getKidneyDisease() {
    const response = await fetch('/api/kidneyDisease');

    return await response.json();
}

export async function addKidneyDiseaseReading(reading) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kidneyDiseaseReading: reading })
    };
    const response = await fetch(`/api/kidneyDisease/add`, requestOptions);

    return await response.json();
}