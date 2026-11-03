import Link from 'next/link';

interface ProductProps {
  id: string;
  nombre: string;
  slug: string;
  precio: string;
}

export default function ProductCard({ nombre, slug, precio }: ProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl border">
      <h3 className="text-xl font-semibold mb-2">{nombre}</h3>
      <p className="text-red-600 font-bold mb-4">{precio}</p>
      <Link href={`/productos/${slug}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Ver Detalle
      </Link>
    </div>
  );
}