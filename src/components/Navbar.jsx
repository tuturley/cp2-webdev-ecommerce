import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/perfil" className="hover:underline">Perfil</Link>
        <Link to="/carrinho" className="hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}
