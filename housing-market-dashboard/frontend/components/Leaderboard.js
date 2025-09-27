import React from 'react';

/**
 * Leaderboard component.
 * Props:
 *   items: Array of objects { city: string, requiredIncome: number }
 *   title: Optional string for the heading.
 *
 * Renders a simple ordered list sorted by requiredIncome descending.
 */
export default function Leaderboard({ items = [], title }) {
  const sorted = [...items].sort(
    (a, b) => b.requiredIncome - a.requiredIncome
  );

  return (
    <div className="border rounded p-4 shadow bg-white">
      <h3 className="text-lg font-semibold mb-2">{title || 'Leaderboard'}</h3>
      <ol className="list-decimal list-inside">
        {sorted.map((item, idx) => (
          <li key={idx} className="mb-1">
            <span className="font-medium">{item.city}</span> –{' '}
            ${item.requiredIncome.toLocaleString()}
          </li>
        ))}
      </ol>
    </div>
  );
}
