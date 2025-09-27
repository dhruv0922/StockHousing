import React from 'react';

/**
 * Simple placeholder chart component.
 * Expects `data` prop to be an array of numbers (0‑100) representing a trend.
 * In a real implementation you could replace this with Chart.js, Recharts, etc.
 */
export default function Chart({ data, title }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h3 className="text-lg font-semibold mb-2">{title || 'Chart'}</h3>
      <div className="flex items-end space-x-1">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((value, idx) => (
            <div
              key={idx}
              style={{
                height: `${value}%`,
                width: '12px',
                backgroundColor: '#4f46e5',
              }}
            />
          ))
        ) : (
          <p className="text-gray-500">No data</p>
        )}
      </div>
    </div>
  );
}
