import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-3 bg-white shadow hover:shadow-lg transition flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
      <h3 className="font-semibold text-center text-sm mb-1">{product.title}</h3>
      <p className="text-blue-700 font-bold mb-1">R$ {product.price.toFixed(2)}</p>
      <div className="flex items-center gap-1">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#eeff00" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg></span>
        <span className="text-sm">{product.rating?.rate || "-"}</span>
      </div>
    </div>
  );
}
