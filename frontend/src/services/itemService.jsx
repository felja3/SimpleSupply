const getItems_URL = "http://localhost:8080/items"

export async function getItems() {
    const response = await fetch(getItems_URL)
    return response.json()
}
export async function addItem(name, category, stock){
    const addItem_URL =
     `http://localhost:8080/addItem?name=${encodeURIComponent(name)}&categoryName=${encodeURIComponent(category)}&stock=${encodeURIComponent(stock)}`

    const response = await fetch(addItem_URL, {method: "POST"})
    return response.json()
}