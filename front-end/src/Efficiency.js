import React, { Component } from 'react';

class Efficiency extends Component {
	/* todo: color rating based on efficiency score */
	render() {
		const { usage, mostEff } = this.props;
		return (
			<div className="product-eff flex-row">
				<div className="energy-info-dark">Energy Usage: {usage} kWh/y</div>
				<div className="energy-info">
					<a href="https://www.energystar.gov/products/most_efficient">
					Most Efficient (Energy Star)</a>: {mostEff}
				</div>
			</div>
		);
	}
}

export default Efficiency;