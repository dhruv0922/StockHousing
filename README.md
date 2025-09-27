# StockHousing

The Housing Affordability Dashboard is a platform that reimagines housing data in a way that feels as intuitive as checking stock tickers. Instead of tracking company share prices, each “ticker” on the dashboard represents a city or region, with the “price” equal to the average annual income required to purchase a median home there. This transforms complex real estate, income, and mortgage data into a single, relatable metric that anyone can understand at a glance. Users can compare regions, track affordability trends over time, and see which areas are becoming more or less attainable for the average household.

The dashboard integrates core financial-style features—ticker cards, time-series charts, leaderboards, and even a U.S. affordability heatmap—to make housing data engaging and easy to explore. For example, a leaderboard highlights the most and least affordable cities, while historical trend charts show how affordability shifts with interest rates, wage growth, and housing prices. By presenting housing affordability in this “stock market” format, the platform creates a compelling tool for policymakers, students, and everyday people who want to better understand the evolving relationship between income and homeownership. In the long run, this concept could be extended into a broader “Housing Market Index” or even tie into real estate investment platforms.

Housing Affordability Dashboard – Project Skeleton & Outline

1. Define Core Features (MVP)
- Ticker Cards: Create city/region ticker-like cards showing the required income for buying a median home, with month-over-month or year-over-year changes.
- Charts: Display time-series charts for affordability trends using line charts that can toggle between different periods.
- Leaderboard: Rank regions by affordability, highlighting cities that become more or less affordable.
- Heatmap: Provide a U.S. map heatmap colored by affordability.
- Macro Indicators: Optionally visualize mortgage rates, wage growth, and other macro trends.

2. Tech Stack
- Frontend: Use Next.js for the dashboard framework.
- Styling: TailwindCSS for consistent and efficient styling.
- Charts: Utilize Chart.js for line charts and react-simple-maps for geographic heatmaps.
- Backend: Start with static JSON data and optionally transition to Python FastAPI or Node.js for dynamic data.
- Data: Use mocked data for simplicity; expand to real API data if time allows.

3. File/Folder Structure
housing-dashboard/
├── frontend/
│   ├── pages/
│   │   ├── index.js         # Main dashboard
│   │   ├── [region].js      # Dynamic page per region (optional)
│   ├── components/
│   │   ├── TickerCard.js    # Card for each city ticker
│   │   ├── Chart.js         # Time-series chart
│   │   ├── Leaderboard.js   # Affordability leaderboard
│   │   ├── Heatmap.js       # U.S. affordability heatmap
│   ├── public/data/
│   │   ├── housing.json     # Mock data
│   ├── styles/              # Tailwind config + globals
│   └── package.json
└── backend/ (optional later)
    ├── app.py               # FastAPI/Flask server
    └── requirements.txt

4. Step-by-Step Build Plan
- Step 1: Setup Project
  - Initialize a Next.js project and configure TailwindCSS.
- Step 2: Mock Data
  - Create a `housing.json` file in the `public/data/` directory with city data, including median home price, median income, mortgage rate, required income, and historical data.
- Step 3: UI Components
  - Implement individual components (TickerCard, Chart, Leaderboard, Heatmap) that read data and display it as per the design.
- Step 4: Dashboard Page
  - Build the main dashboard in `pages/index.js` with a header, component grid, chart section, and optional heatmap.
- Step 5: Polish
  - Finalize styling with TailwindCSS, make sure charts and components update smoothly, and prepare for deployment.

5. Stretch Goals (If Time)
- Add a backend API that fetches real-time data using Zillow, FRED, or other public data sources.
- Implement search or filtering functionality so users can find specific regions.
- Create a Housing Affordability Index to aggregate affordability data into a single metric.
- Integrate user authentication and saved region watchlists for a personalized experience





