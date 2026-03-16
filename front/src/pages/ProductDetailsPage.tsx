import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import type {Product} from "../types/product";
import covaloLogo from "../assets/covalo-logo.png";


function ProductDetailsPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  //fetch product details
  useEffect(() => {
  async function fetchProduct() {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchProduct();
}, [id]);

  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          className="back-wrapper"
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "28px",
            width: "fit-content",
          }}
        >
          <span
            style={{
              fontSize: "26px",
              marginRight: "8px",
              transition: "transform 0.2s",
            }}
          >
            ←
          </span>

          <span className="back-text"
          style={{
            fontSize: "18px",
          }}
          >Back to products</span>
        </div>

        <h2>Product not found.</h2>
      </div>
    );
  }

  const p = product;

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "700px",
        margin: "0 auto",
        backgroundColor: "#fff7fb",
        minHeight: "100vh",
      }}
    >
      <div
        className="back-wrapper"
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "28px",
          width: "fit-content",
        }}
      >
        <span
          style={{
            fontSize: "46px",
            marginRight: "10px",
            transition: "transform 0.2s",
            lineHeight: 1,
            color: "#831843",
          }}
        >
          ←
        </span>

        <span className="back-text">Back to products</span>
      </div>

<div
  style={{
  padding: "40px",
  fontFamily: "Arial, sans-serif",
  maxWidth: "700px",
  margin: "0 auto",
  backgroundColor: "#fff7fb",
  minHeight: "100vh",
  backgroundImage: `url(${covaloLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  backgroundSize: "120px",
}}
>
  
</div>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "36px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            fontSize: "42px",
            color: "#111827",
          }}
        >
          {p.name}
        </h1>

        <div
          style={{
            height: "220px",
            background: "#f9fafb",
            borderRadius: "12px",
            margin: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontWeight: 600,
          }}
        >
          Product visual
        </div>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#374151",
          }}
        >
          {p.description}
        </p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;