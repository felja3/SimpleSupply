import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddItem from "./pages/AddItem"
import EditItem from "./pages/EditItem"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App