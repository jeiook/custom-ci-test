import React, { Component } from 'react';
import DropDown from './DropDown.js';
import Net from './Net.js';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: null,
			budget: -1,
			product: null
		};

		this.products = ["fridge", "air conditioner", "oven"];

		this.sendUserInfo = this.sendUserInfo.bind(this);
	}

	isNewUser() {
		return true;
	}

	sendUserInfo() {
		const name = document.getElementById("name").value;
		const budget = document.getElementById("budget").value;
		const product = document.getElementById("product").value;
    if (name && !isNaN(budget) && product) {
    	this.setState({
    		name,
    		budget,
    		product,
    	});
      Net.post(JSON.stringify(this.state));
      alert("information sent!");
    } else {
      alert(
        "You need to enter something in all three fields (a number for budget)"
      );
    }
	}

	render() {
		return (
			<div className="home flex-col">
				<h1 id="welcome">First Time User?</h1>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" />
					<label htmlFor="budget">Budget:</label>
					<input type="text" id="budget" name="budget" />
					<DropDown name="product_type" id="product" itemList={this.products} />
					<button id="submit" onClick={this.sendUserInfo}>Find Recommendations</button>
			</div>
		);
	}
}

export default Home;
