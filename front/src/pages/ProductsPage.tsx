import { useEffect, useState } from "react";
import { Product } from "./types/product";
import {getAllProducts} from "../services/productService";
import productCard from "../components/productCard";
import PageHeader from "../components/PageHeader";




function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    (product.name || "").toLowerCase().includes(search.toLowerCase())
  );
}, [products, search]);


  // Fetch products from the backend when the component mounts
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



  // Show loading state while fetching products
  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h2>Loading products...</h2>
      <p style={{ color: "#6b7280" }}>Preparing the product catalogue/Consulting the flok...</p>
      </div>
    );
  }

  return (

 <div
    style={{
      padding: "48px 24px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <PageHeader
      title="Mini Covalo"
      subtitle="Browse supplier products"
    />

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "28px",
      }}
    >

        <input
          type="text"
          placeholder="Search products/consulting our floks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 14px",
          width: "100%",
          maxWidth: "460px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          fontSize: "16px",
          outline: "none",
          backgroundColor: "white",
          }}
        />
      </div>

      
    <p
      style={{
        textAlign: "center",
        color: "#6b7280",
        marginBottom: "24px",
      }}
    >
      {filteredProducts.length} product(s) found
    </p>

    {filteredProducts.length === 0 ? (
      <p style={{ textAlign: "center" }}>No products found.</p>
    ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    )}
  </div>
  );
}

export default ProductsPage;

