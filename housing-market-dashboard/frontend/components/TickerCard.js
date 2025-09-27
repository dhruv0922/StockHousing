import React from 'react';

export default function TickerCard({ city, requiredIncome }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h3 className="text-lg font-semibold">{city}</h3>
      <p className="text-gray-700">
        Required Income: <span className="font-medium">${requiredIncome.toLocaleString()}</span>
      </p>
    </div>
  );
}
