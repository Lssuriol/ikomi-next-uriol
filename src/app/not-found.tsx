import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">La página que estás buscando no existe en IKOMI PERÚ.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
        Volver al Inicio
      </Link>
    </main>
  );
}