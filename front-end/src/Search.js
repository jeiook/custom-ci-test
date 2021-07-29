import React, { Component } from 'react';
import Result from './Result.js';

class Search extends Component {
	constructor(props) {
		super(props);
		this.app = this.props.App;
	}

	render() {
		const { product } = this.app.state;
		if (product) {
			return (
			<div className="search flex-col">
				<h1>Best Product</h1>
				<div>
					<Result item={product} key={product}></Result>
				</div>
			</div>
		);
		} else {
			return (
				<div className="search modal">
					<p>Unfortunately, we couldn't find the best product</p>	
				</div>
			);
		}
	}
}

export default Search;
