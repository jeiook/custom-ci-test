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
    if (name && !isNaN(budget) && Number(budget) > 0 && product) {
    	this.setState({
    		name,
    		budget: Number(budget),
    		product,
    	});
      Net.post(JSON.stringify(this.state));
      alert("information sent!");
    } else {
      alert("You need to enter something in all three fields (and have a " +
      	"positive number for the budget)");
    }
	}

	render() {
		return (
			<div className="home flex-col">
				<h1 id="welcome">Sign in</h1>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" required minLength="2" />
				<label htmlFor="budget">Budget</label>
				<input type="number" id="budget" name="budget" required min="0" />
				<label htmlFor="product_type">product type</label>
				<DropDown name="product_type" id="product" itemList={this.products} />
				<button id="submit" onClick={this.sendUserInfo}>Find Recommendations</button>
			</div>
		);
	}
}

export default Home;
