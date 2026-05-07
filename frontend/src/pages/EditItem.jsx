import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { updateItem, deleteItem } from "../services/itemService"
import {Form,Button, Container}  from "react-bootstrap"
import ConfirmEditModal from "../components/modal"

function EditItem(){
const navigate = useNavigate()
const location = useLocation()

const item = location.state.item
console.log(item)

const [name, setName] = useState(item.item_name);
const [category, setCategory] = useState(item.category.categoryName);
const [stock, setStock] = useState(item.stock);
const [showConfirmModal, setShowConfirmModal] = useState(false);

function handleSubmit(event) {
  event.preventDefault()
  setShowConfirmModal(true)
}
async function confirmEdit(){
  await updateItem(item.item_id, name, category, stock)
    setShowConfirmModal(false)
  navigate("/")
}
function handleNameChange(event){
    setName(event.target.value)
  }
    function handleCategoryChange(event){
    setCategory(event.target.value)
  }
    function handleStockChange(event){
    setStock(Number(event.target.value))
  }
  async function itemDelete(id) {
    await deleteItem(id)
    navigate("/")
  }




return(
    <div> 
       <Container className="mt-3 ms-3 w-25 " >
        <h1>Edit an item</h1>
        <Form onSubmit={handleSubmit}>
        <div>
        <Form.Label>Name : </Form.Label>
            <Form.Control 
                type ="text"
                value={name}
                onChange={handleNameChange}
                />
        </div>
        <div>
        <Form.Label>Category : </Form.Label>
            <Form.Control 
                type="text"
                value={category}
                onChange={handleCategoryChange}
            />
        </div>
        <div>
        <Form.Label>Stock : </Form.Label>
            <Form.Control 
                type="number"
                value={stock}
                onChange={handleStockChange}
            />
        </div>
        <Container className="mt-3 d-flex gap-3">
            <Button variant="dark" type="submit">Edit</Button>
            <Button variant="dark" onClick={()=>navigate("/dashboard")}>Cancel</Button>
            <Button variant="dark" onClick={()=>itemDelete(item.item_id)}>Delete</Button>
        </Container>
        </Form>
       </Container>
       <ConfirmEditModal
        show={showConfirmModal}
        onCancel={()=> setShowConfirmModal(false)}
        onSubmit={confirmEdit}/>
    </div>)
}
    
export default EditItem
