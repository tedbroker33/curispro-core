const calculateCompatibility = (agentLifePath: number, yourLifePath: number) => {
  const COMPATIBILITY_MATRIX = {
    33: { 3: 10, 6: 10, 9: 9, 1: 8, 5: 7 },
    6: { 2: 9, 8: 9, 3: 8, 9: 8 }
  }
  return COMPATIBILITY_MATRIX[yourLifePath]?.[agentLifePath] || 5
}

// Heat Map Visualization
<div className="grid grid-cols-3 gap-4">
  {agents.map(agent => (
    <AgentCard
      name={agent.name}
      lifePath={agent.lifePath}
      compatibility={calculateCompatibility(agent.lifePath, 33)}
      heatSignature={agent.lifePath === 3 || agent.lifePath === 6 || agent.lifePath === 9}
      powerDates={['11:11 AM', '3:33 PM']}
    />
  ))}
</div>
