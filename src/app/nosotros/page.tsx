import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros | IKOMI PERÚ',
  description: 'Empresa importadora y comercializadora de repuestos para camiones de Korea y Japón.',
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">NOSOTROS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Equipo</h2>
          <p className="text-gray-300">Empresa importadora de repuestos con personal altamente calificado.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Almacén</h2>
          <p className="text-gray-300">Stock permanente para atención inmediata a nivel nacional.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Tienda</h2>
          <p className="text-gray-300">Atención directa al público con asesoría especializada.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Empresa</h2>
          <p className="text-gray-300">Líderes en importación de repuestos para vehículos pesados.</p>
        </div>
      </div>
    </main>
  );
}