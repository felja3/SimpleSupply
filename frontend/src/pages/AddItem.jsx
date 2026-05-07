import { useState } from "react"
import { addItem } from "../services/itemService"
import { Navigate, useNavigate } from "react-router-dom";
import {Form,Button, Container}  from "react-bootstrap"


function AddItem() {
    
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const navitage = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    await addItem(name, category, stock)
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

 return (
    <div>
        
       <Container className="mt-3 ms-3 w-25" >
        <h1>Create a new item</h1>
          <Form onSubmit={handleSubmit}>
          <div>
          <Form.Label>Name of item </Form.Label>
                <Form.Control 
                    type ="text"
                    value={name}
                    onChange={handleNameChange}
                    />
            </div>
            <div>
            <Form.Label>Category of item </Form.Label>
                <Form.Control  
                    type="text"
                    value={category}
                    onChange={handleCategoryChange}
                />
            </div>
            <div>
            <Form.Label>Stock amount of item </Form.Label>
                <Form.Control  
                    type="number"
                    value={stock}
                    onChange={handleStockChange}
                />
            </div>

            <Container className="mt-3 d-flex gap-3" >
            <Button variant="dark"type="submit">Create</Button>
            <Button variant="dark"type="button"onClick={()=>navigate("/")}>Back</Button>
            </Container>
            

          </Form>
        </Container> 
    </div>
  )
  
}
export default AddItem
