import ModuleCard from '@/components/ModuleCard';
// OR
import { ModuleCard } from '@/components/ModuleCard';
// OR wherever ModuleCard is located
```
'use client';

import { useState, useEffect } from 'react';

export default function ScannerPage() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/agents');
        
        if (!response.ok) {
          throw new Error('Failed to fetch agents');
        }
        
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading scanner...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Scanner</h1>
      
      <div className="grid gap-4">
        {agents.length === 0 ? (
          <p className="text-gray-500">No agents found</p>
        ) : (
          agents.map((agent, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(agent, null, 2)}
              </pre>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
