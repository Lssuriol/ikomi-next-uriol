import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-xl mb-3 text-blue-400">IKOMI PERU</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empresa importadora y comercializadora de repuestos para todo tipo de vehículos con calidad y a precios de mercado.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded shadow border border-gray-800 text-center">
          <h4 className="font-semibold text-lg mb-2 text-red-500">Dirección</h4>
          <p className="text-gray-300 text-sm">Avenida Nicolás Ayllón 3384</p>
          <p className="text-gray-300 text-sm">Carretera Central - Lima, Ate</p>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-semibold text-lg mb-3 text-blue-400">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline text-gray-300">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:underline text-gray-300">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:underline text-gray-300">Servicios</Link></li>
            <li><Link href="/productos" className="hover:underline text-gray-300">Productos</Link></li>
            <li><Link href="/contacto" className="hover:underline text-gray-300">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        Copyright © 2026 Grupo IKOMI PERU - Desarrollado por Luz Uriol Izquierdo
      </div>
    </footer>
  );
}