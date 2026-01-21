'use client';

import { useState } from 'react';
import ModuleCard from '@/components/ModuleCard';

export default function GroupPage() {
  const [modules] = useState([
    { id: 1, name: 'Module 1', description: 'First module' },
    { id: 2, name: 'Module 2', description: 'Second module' },
    { id: 3, name: 'Module 3', description: 'Third module' },
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Group Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.name}
            description={module.description}
          />
        ))}
      </div>
    </div>
  );
}
