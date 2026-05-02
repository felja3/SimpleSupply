const API_URL = "http://localhost:8080/items"

export async function getItems() {
    const response = await fetch(API_URL)
    return response.json()
}