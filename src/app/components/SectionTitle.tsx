export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center text-gray-800 my-8 border-b-2 border-red-500 pb-2 inline-block">
      {title}
    </h2>
  );
}