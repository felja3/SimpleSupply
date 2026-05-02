import { useState } from "react"
import { addItem } from "../services/itemService"
import { Navigate, useNavigate } from "react-router-dom";


function AddItem() {
    
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const navitage = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    await addItem(name, category, stock)
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
        <h1>Create a new item</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Name of item </label>
            <input 
                type ="text"
                value={name}
                onChange={handleNameChange}
                />
        </div>
        <div>
        <label>Category of item </label>
            <input 
                type="text"
                value={category}
                onChange={handleCategoryChange}
            />
        </div>
        <div>
        <label>Stock amount of item </label>
            <input 
                type="number"
                value={stock}
                onChange={handleStockChange}
            />
        </div>
        <button type="submit">create</button>
        
        </form>
        <button type="button"onClick={()=>navitage("/")}>back</button>
    </div>
  )
  
}
export default AddItem
