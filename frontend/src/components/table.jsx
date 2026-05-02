function ItemTable({ items }) {
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
          <tr key={item.item_id}>
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