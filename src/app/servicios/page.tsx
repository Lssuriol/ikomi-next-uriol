import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios | IKOMI PERÚ',
  description: 'Servicios de venta, asesoría y delivery de repuestos para camiones.',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2 text-center">SERVICIOS</h1>
      <p className="text-center text-gray-400 mb-8">Estamos listos para atenderte.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded border border-gray-700">
          <h2 className="text-xl font-bold text-red-500 mb-2">Ventas</h2>
          <p className="text-gray-300">Venta de repuestos de motor, cajas, transmisiones y coronas al mejor precio.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded border border-gray-700">
          <h2 className="text-xl font-bold text-red-500 mb-2">Asesoría</h2>
          <p className="text-gray-300">Asesoría personalizada para elegir el mejor repuesto para su unidad.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded border border-gray-700">
          <h2 className="text-xl font-bold text-red-500 mb-2">Delivery</h2>
          <p className="text-gray-300">Entregas a domicilio rápidas y seguras sin salir de casa.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded border border-gray-700">
          <h2 className="text-xl font-bold text-red-500 mb-2">Productos</h2>
          <p className="text-gray-300">Contamos con marcas reconocidas y garantía de fábrica.</p>
        </div>
      </div>
    </main>
  );
}