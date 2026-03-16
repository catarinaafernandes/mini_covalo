import { useNavigate } from "react-router-dom";
import Product from "./ProductCard";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  
  return (
     <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "18px",
        minHeight: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.12)";
      }}

        onMouseLeave={(e) => { 
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
      } }
    >
      <h3
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: 700,
          color: "#111827",
          textAlign: "center",
          transition: "opacity 0.2s ease",
        }}
        className="product-title"
      >
        {product.name}
      </h3>
      <div
        className="product-hover-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17, 24, 39, 0.92)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          opacity: 0,
          transition: "opacity 0.25s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "17px",
            lineHeight: 1.5,
            color: "#f9fafb",
          }}
        >
          {product.description}
           </p>
      </div>
    </div>
  );
}

export default ProductCard;