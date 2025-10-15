import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const urlBase = import.meta.env.VITE_API_URL;
      const res = await fetch(`${urlBase}/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Carregando...</div>;
  if (!product) return <div>Produto não encontrado.</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded bg-white">
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="text-orange-500 opacity-90 font-bold mb-2">R$ {product.price.toFixed(2)}</p>
      <div className="flex items-center gap-1 mb-2">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fbff00" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg></span>
        <span>{product.rating?.rate || "-"}</span>
      </div>
      <Link to="/" className="bg-orange-400 text-white px-4 py-2 rounded font-bold underline inline-block mt-2">Voltar</Link>
    </div>
  );
}
