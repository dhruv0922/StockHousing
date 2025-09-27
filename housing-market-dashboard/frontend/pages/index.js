import React, { useEffect, useState } from 'react';
import TickerCard from '../components/TickerCard';
import Chart from '../components/Chart';
import Leaderboard from '../components/Leaderboard';
import Heatmap from '../components/Heatmap';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load mock data from the public folder
    fetch('/data/housing.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load data', err));
  }, []);

  // Prepare data for the ticker cards
  const tickerItems = data.map(({ city, requiredIncome }) => ({
    city,
    requiredIncome,
  }));

  // Data for the chart – use the trend of the first city as an example
  const chartData = data.length > 0 ? data[0].trend : [];

  // Data for the leaderboard (city + requiredIncome)
  const leaderboardItems = tickerItems;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Housing Affordability Dashboard
      </h1>

      {/* Ticker cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tickerItems.map((item, idx) => (
          <TickerCard
            key={idx}
            city={item.city}
            requiredIncome={item.requiredIncome}
          />
        ))}
      </div>

      {/* Chart */}
      <div className="mt-8">
        <Chart data={chartData} title="Trend for First City" />
      </div>

      {/* Leaderboard */}
      <div className="mt-8">
        <Leaderboard items={leaderboardItems} title="Affordability Leaderboard" />
      </div>

      {/* Heatmap placeholder */}
      <div className="mt-8">
        <Heatmap title="U.S. Affordability Heatmap" />
      </div>
    </div>
  );
}
