import { useNavigate } from "react-router-dom"
function ItemTable({ items }) {
  const navigate = useNavigate()
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr
            key={item.item_id}
            onClick={() => navigate(`/edit/${item.item_id}`,{ state: { item }})}
            style={{ cursor: "pointer" }}
          >
            <td>{item.item_name}</td>
            <td>{item.category?.categoryName}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default ItemTable