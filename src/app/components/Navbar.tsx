'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/productos', label: 'Producto' },
    { href: '/marcas', label: 'Marcas' },
    { href: '/contacto', label: 'Contáctenos' },
  ];

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl tracking-wider uppercase">
          IKOMI PERÚ <span className="text-red-400 font-extrabold">IKM</span>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium px-2 py-1 rounded ${
                  isActive
                    ? 'text-yellow-300 font-bold border-b-2 border-yellow-300'
                    : 'hover:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botón Menú Responsive */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-2xl p-2"
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 px-4 pt-2 pb-4 space-y-2 border-t border-blue-500">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-base ${
                  isActive
                    ? 'bg-blue-800 text-yellow-300 font-bold'
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}