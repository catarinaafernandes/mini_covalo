import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
};

function ProductDetailsPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  <div
  onClick={() => navigate("/")}
  style={{
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "24px",
    width: "fit-content",
  }}
>
  <span
  style={{
    opacity: 0,
    transform: "translateX(-5px)",
    transition: "all 0.2s",
    color: "#6b7280",
    fontWeight: 500,
  }}
  className="back-text"
>
  Back to products
</span>
  <span
    style={{
      fontSize: "24px",
      marginRight: "8px",
      transition: "transform 0.2s",
    }}
  >
    ←
  </span>
</div>

  // Fetch a single product by id
  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

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
        <h1>Loading product...</h1>
      </div>
    );
  }

  if (!product) {
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
        <h1>Product not found.</h1>
        <button onClick={() => navigate("/")}>Back</button>
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
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to products
      </button>

      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;