import { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTOS } from '../../data/productos';

export const metadata: Metadata = {
  title: 'Productos | IKOMI PERÚ',
  description: 'Catálogo de repuestos para camiones de todas las marcas.',
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-center">NUESTROS PRODUCTOS</h1>
      <p className="text-center text-gray-600 mb-8">Los mejores productos y precios.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PRODUCTOS.map((prod) => (
          <div key={prod.id} className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between bg-white">
            <div>
              <h2 className="text-xl font-bold mb-2 text-blue-900">{prod.nombre}</h2>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-3">
                {prod.categoria}
              </span>
              <p className="text-red-600 font-extrabold text-xl mb-4">{prod.precio}</p>
            </div>
            <Link 
              href={`/productos/${prod.slug}`} 
              className="block text-center bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}