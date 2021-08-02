import React from 'react';

const Efficiency = (usage, mostEff) => (
  <div className="product-eff flex-row">
    <div className="energy-info dark card">
      Energy Usage:
      {' '}
      {usage}
      {' '}
      kWh/y
    </div>
    <div className="energy-info card">
      <a href="https://www.energystar.gov/products/most_efficient">
        Most Efficient (Energy Star)

      </a>
      :
      {' '}
      {mostEff}
    </div>
  </div>
);

export default Efficiency;
