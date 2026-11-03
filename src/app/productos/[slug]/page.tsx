import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTOS } from '../../../data/productos';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const producto = PRODUCTOS.find((p) => p.slug === slug);
  if (!producto) return { title: 'Producto no encontrado' };
  return {
    title: `${producto.nombre} | IKOMI PERÚ`,
    description: producto.descripcion,
  };
}

export default async function ProductoDetallePage({ params }: Props) {
  const { slug } = await params;
  const producto = PRODUCTOS.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-white text-gray-900 max-w-3xl mx-auto">
      <Link href="/productos" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
        ← Volver a productos
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-blue-950">{producto.nombre}</h1>
      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
        {producto.categoria}
      </span>
      <p className="text-3xl font-extrabold text-red-600 my-4">{producto.precio}</p>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
        <h3 className="font-bold text-gray-700 mb-2">Descripción del producto:</h3>
        <p className="text-gray-600 leading-relaxed">{producto.descripcion}</p>
      </div>
    </main>
  );
}