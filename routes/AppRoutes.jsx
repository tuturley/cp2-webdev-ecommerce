import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout";
import Home from "../src/pages/Home";
import Perfil from "../src/pages/Perfil";
import Carrinho from "../src/pages/Carrinho";
import ProductDetail from "../src/pages/ProductDetail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="produto/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}