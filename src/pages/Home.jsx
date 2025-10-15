import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const categories = [
  { key: "electronics", label: "Eletrônicos" },
  { key: "jewelery", label: "Joias" },
  { key: "men's clothing", label: "Roupas Masculinas" },
];

export default function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const urlBase = import.meta.env.VITE_API_URL;
      const data = {};
      for (const cat of categories) {
        const res = await fetch(`${urlBase}/products/category/${encodeURIComponent(cat.key)}`);
        data[cat.key] = await res.json();
      }
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-10">Carregando produtos...</div>;

  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <section key={cat.key}>
          <Banner title={cat.label} subtitle="Produtos em destaque" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products[cat.key]?.slice(0, 4).map((product) => (
              <Link key={product.id} to={`/produto/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
