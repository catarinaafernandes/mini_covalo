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
            marginBottom: "20px",
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
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      fontFamily: "Arial, sans-serif",
    }}
  >

    <div
  style={{
    width: "100%",
    backgroundColor: "#fde7ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 16px",
    boxSizing: "border-box",
  }}
>
  <img
    src={covaloLogo}
    alt="Covalo logo"
    style={{
      maxWidth: "220px",
      width: "100%",
      height: "auto",
      objectFit: "contain",
    }}
  />
</div>

<div
  style={{
    maxWidth: "700px",
    margin: "0 auto",
    padding: "24px 20px 40px",
    boxSizing: "border-box",
  }}
></div>
    
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

       <span
  className="back-text"
  style={{
    fontSize: "18px",
    color: "#f472b6",
    opacity: 1
  }}
>
  Back to products
</span>
      </div>

    <div
  style={{
    background: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  }}
>
  <h1
    style={{
      marginTop: 0,
      fontSize: "42px",
      color: "#2d1b3d",
      textAlign: "center",
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
      margin: 0,
      textAlign: "center",
    }}
  >
    {p.description}
  </p>
</div>
    </div>
  );
}

export default ProductDetailsPage;