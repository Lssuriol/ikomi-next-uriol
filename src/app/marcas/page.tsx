import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marcas | IKOMI PERÚ',
  description: 'Marcas reconocidas en el mercado nacional e internacional.',
};

export default function MarcasPage() {
  const marcas = [
    { nombre: 'Sangsin Brake', desc: 'Fabricante líder en Corea de piezas y partes para frenos.' },
    { nombre: 'Hansang', desc: 'Amplia gama de repuestos para caja como piñones y satélites.' },
    { nombre: 'Mando', desc: 'Especialistas en sistemas de suspensión, dirección y frenos.' },
    { nombre: 'TCIC', desc: 'Bombas y bombines de freno y embrague de alta calidad.' },
    { nombre: 'PHC Valeo', desc: 'Socio en producción de embragues con estándar global.' },
    { nombre: 'Yulim', desc: 'Sistemas de suspensión y dirección para vehículos comerciales.' },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">MARCAS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {marcas.map((m, idx) => (
          <div key={idx} className="bg-white text-gray-900 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-900">{m.nombre}</h2>
            <p className="text-sm text-gray-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}