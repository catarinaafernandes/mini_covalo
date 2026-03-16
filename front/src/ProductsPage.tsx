import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
};

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  // Search products by name
  function handleSearch(value: string) {
    setSearch(value);

    const filtered = products.filter((product) =>
      (product.name || "").toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  }

  // Show loading state while fetching products
  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        <h1>Loading products...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "700px",
        margin: "0 auto"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "48px" }}>
          Welcome to Mini Covalo
        </h1>

        <p
          style={{
            marginTop: 0,
            marginBottom: "24px",
            color: "#bbb",
            fontSize: "18px"
          }}
        >
          Browse supplier products
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
              <h3 className="product-title">{p.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;