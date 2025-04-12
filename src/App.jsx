import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductInfo from "./pages/productInfo";
import Index from "./pages/index";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/productInfo" element={<ProductInfo />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
