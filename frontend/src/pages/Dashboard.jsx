import { useEffect, useState } from "react"
import ItemTable from "../components/table"
import { getItems } from "../services/itemService"

function Dashboard() {
    const [items, setItems] = useState([])
    useEffect(() => {
    getItems().then(data => setItems(data)) }, [])

    return (
    <div>
      <h1>Dashboard</h1>
      <button>Add</button>
      <button>Edit</button>
      <ItemTable items={items} />
    </div>
  )
}
export default Dashboard
