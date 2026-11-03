import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center p-8">
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          REPUESTOS EN GENERAL <br />
          <span className="text-red-500">para camiones de todas las marcas.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Somos una empresa importadora de repuestos originales de Korea y Japón.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/productos"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Ver Catálogo
          </Link>
          <Link
            href="/contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Contáctenos
          </Link>
        </div>
      </div>
    </main>
  );
}