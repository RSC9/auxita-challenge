export async function getHypertension() {
    const response = await fetch('/api/hypertension');

    return await response.json();
}

export async function addHypertensionReading(reading) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hypertensionReading: reading })
    };
    const response = await fetch(`/api/hypertension/add`, requestOptions);

    return await response.json();
}