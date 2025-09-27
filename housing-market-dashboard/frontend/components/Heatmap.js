import React from 'react';

/**
 * Simple placeholder heatmap component.
 * In a real implementation you could use a library like react-simple-maps
 * or a custom SVG map. Here we just render a box with a title.
 */
export default function Heatmap({ title }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h3 className="text-lg font-semibold mb-2">{title || 'Heatmap'}</h3>
      <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-600">
        Heatmap placeholder
      </div>
    </div>
  );
}
