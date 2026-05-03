import { useEffect, useState } from "react"
import ItemTable from "../components/table"
import { getItems } from "../services/itemService"
import { useNavigate } from "react-router-dom"
import {Button, Container}  from "react-bootstrap"

function Dashboard() {
  const navigate = useNavigate()
    
  const [items, setItems] = useState([])
    useEffect(() => {
    getItems().then(data => setItems(data)) }, [])

    return (
    <Container className="mt-3" >
      <div>
      <h1>Inventory Dashboard</h1>
      <Button variant="dark"className="mb-4" onClick={() => navigate("/add")}>Add</Button>
      <ItemTable items={items} />
    </div>
    </Container>
  )
}
export default Dashboard
