export async function getKidneyDisease() {
    const response = await fetch('/api/kidneyDisease');

    return await response.json();
}