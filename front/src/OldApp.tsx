import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
};



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  

//fetch products from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })

      .catch((err) => console.error(err));
  }, []);



  //search products by name(reuquired)
   // Search products by name
  function handleSearch(value: string) {
    setSearch(value);

    const filtered = products.filter((product) =>
      (product.name || "").toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSelectedProduct(null); // Clear selected product when searching
  }
  //show loading state while fetching products
if (loading) {
  return (
    <div style={{ padding: "40px", 
    fontFamily: "Arial",
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto",
    
     }}>
      <h1>Loading products...</h1>
    </div>
  );
}

  return (
    <div style={{ padding: "40px", 
                  fontFamily: "Arial",
                  maxWidth: "700px",
                  margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
    <h1 style={{ marginBottom: "10px", fontSize: "48px"}}>Welcome to Mini Covalo </h1>

<p style={{ marginTop: 0, 
  marginBottom:"24px",
  color: "#bbb" ,
  fontSize: "18px" }}>
  Browse supplier Products
</p>


      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          padding: "10px",   
          width: "100%",
          maxWidth: "420px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}    
      /> 
       </div>

      <div style={{ marginTop: "20px" }}>
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center" }}>No products found.</p>
        ) : (
          filteredProducts.map((p) => (
            <div 
            key={p.id} 
            className="product-card"
            onClick={() => navigate(`/product/${p.id}`)}
            >
              <h3 >{p.name}</h3>
             
            </div>
          ))
        )} 
     


</div>
  {selectedProduct && (
  <div className="product-details">
    <h2>{selectedProduct.name}</h2>
    <p>{selectedProduct.description}</p>

    <button onClick={() => setSelectedProduct(null)}>
      Close
    </button>
  </div>
)}
  </div>
 );

}
export default App;



