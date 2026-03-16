import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductDetailsPage from "./ProductDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;