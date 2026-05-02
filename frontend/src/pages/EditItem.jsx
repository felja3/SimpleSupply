import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { updateItem } from "../services/itemService"

function EditItem(){
const navigate = useNavigate()
const location = useLocation()

const item = location.state.item
console.log(item)

const [name, setName] = useState(item.item_name);
const [category, setCategory] = useState(item.category.categoryName);
const [stock, setStock] = useState(item.stock);

async function handleSubmit(event) {
  event.preventDefault()
  await updateItem(item.item_id, name, category, stock)
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

return(
    <div> 
       <h1>Edit an item</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Name : </label>
            <input 
                type ="text"
                value={name}
                onChange={handleNameChange}
                />
        </div>
        <div>
        <label>Category : </label>
            <input 
                type="text"
                value={category}
                onChange={handleCategoryChange}
            />
        </div>
        <div>
        <label>Stock : </label>
            <input 
                type="number"
                value={stock}
                onChange={handleStockChange}
            />
        </div>
        <button type="submit">edit</button>
        
        </form>
        <button onClick={()=>navigate("/dashboard")}>cancel</button>
    </div>)
}
    
export default EditItem
