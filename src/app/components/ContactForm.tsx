'use client';

export default function ContactForm() {
  return (
    <form className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Tu nombre" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Mensaje</label>
        <textarea className="w-full border rounded p-2" rows={4} placeholder="Escribe tu consulta"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
        Enviar Mensaje
      </button>
    </form>
  );
}