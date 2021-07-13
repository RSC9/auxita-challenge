export async function getUniverse() {
    const response = await fetch('/api/universe');

    return await response.json();
}