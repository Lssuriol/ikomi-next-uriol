export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    </section>
  );
}