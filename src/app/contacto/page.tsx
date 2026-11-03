import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contáctenos | IKOMI PERÚ',
  description: 'Póngase en contacto con un asesor de IKOMI PERÚ.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">CONTÁCTENOS</h1>
      <p className="text-center text-gray-600 mb-8">Llene el formulario y un asesor se pondrá en contacto pronto.</p>
      
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Apellidos y Nombres" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Teléfono" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Correo" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Asunto" className="w-full border p-2 rounded" />
        <textarea placeholder="Mensaje" rows={4} className="w-full border p-2 rounded"></textarea>
        <button type="button" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full font-bold">
          Enviar Mensaje
        </button>
      </form>
    </main>
  );
}