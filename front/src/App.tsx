import { useEffect, useState } from "react";

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

function handleSearch(value: string) {
  setSearch(value);

  const filtered = products.filter((product) =>
    (product.name || "").toLowerCase().includes(value.toLowerCase())
  );

  setFilteredProducts(filtered);
}

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Products</h1>


      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          padding: "8px",   
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}    
      />  
      <div style={{ marginTop: "30px" }}>
<div style={{ marginTop: "30px" }}>
  {filteredProducts.length === 0 ? (
    <p>No products found.</p>
  ) : (
    filteredProducts.map((p) => (
      <div
        key={p.id}
        style={{
          border: "1px solid #444",
          padding: "16px",
          marginBottom: "12px",
          borderRadius: "8px"
        }}
      >
        <h3 style={{ margin: 0 }}>{p.name}</h3>
        <p style={{ marginTop: "8px" }}>{p.description}</p>
      </div>
    ))
  )}
</div>

  //only show products that match the search query and not all products
  {filteredProducts.map((p) => (
    <div
      key={p.id}
      style={{
        border: "1px solid #444",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px"
      }}
    >
      <h3 style={{ margin: 0 }}>{p.name}</h3>
      <p style={{ marginTop: "8px" }}>{p.description}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;



