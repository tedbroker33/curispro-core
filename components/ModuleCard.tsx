interface ModuleCardProps {
  title: string;
  description: string;
}

export default function ModuleCard({ title, description }: ModuleCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
