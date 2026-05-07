const getItems_URL = "http://localhost:8080/items"
export async function getItems() {
    const response = await fetch(getItems_URL)
    return response.json()
}
export async function addItem(name, category, stock){
    const addItem_URL =
     `http://localhost:8080/items/addItem?name=${encodeURIComponent(name)}&categoryName=${encodeURIComponent(category)}&stock=${encodeURIComponent(stock)}`

    const response = await fetch(addItem_URL, {method: "POST"})
}
export async function updateItem(id, name, category, stock) {
  const updateItem_URL =
    `http://localhost:8080/items/updateItem/${id}?name=${encodeURIComponent(name)}&categoryName=${encodeURIComponent(category)}&stock=${encodeURIComponent(stock)}`
  const response = await fetch(updateItem_URL, {
    method: "PUT"
  })
}

export async function deleteItem(id){
  const deleteItem_URL = `http://localhost:8080/items/deleteItem/${id}`
  const response = await fetch (deleteItem_URL, {method : "DELETE"})
}