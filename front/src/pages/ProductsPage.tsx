import { useEffect, useState, useMemo } from "react";
import type { Product } from "../types/product";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import covaloLogo from "../assets/covalo-logo.png";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      (product.name || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          padding: "60px 24px",
          fontFamily: "Arial, sans-serif",
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#111827",
          minHeight: "100vh",
          color: "#e5e7eb",
          textAlign: "center",
        }}
      >
        <h2>Loading products...</h2>
        <p>Preparing the product catalogue...</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="Mini Covalo" />

      <div style={{ backgroundColor: "#111827", minHeight: "100vh" }}>
        <div
          style={{
            padding: "48px 24px",
            fontFamily: "Arial, sans-serif",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#e5e7eb",
              marginBottom: "18px",
              fontSize: "18px",
            }}
          >
            Browse supplier products
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
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
                color: "#111827",
              }}
            />
          </div>

          {search.trim() !== "" && (
            <p
              style={{
                textAlign: "center",
                color: "#9ca3af",
                marginBottom: "24px",
              }}
            >
              {filteredProducts.length} product(s) found
            </p>
          )}

          {filteredProducts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#e5e7eb" }}>
              No products found.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
              }}
            >
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Covalo logo no canto inferior direito */}
      <img
        src={covaloLogo}
        alt="Covalo"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "22px",
          height: "28px",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
    </>
  );
}

export default ProductsPage;