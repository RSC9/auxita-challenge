export async function getHypertension() {
    const response = await fetch('/api/hypertension');

    return await response.json();
}