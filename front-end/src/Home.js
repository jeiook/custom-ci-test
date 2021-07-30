import React, { Component } from 'react';
import DropDown from './DropDown.js';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			budget: "",
			product: "",
			volume: ""
		};

		this.products = ["fridge"];

		this.search = this.search.bind(this);
		this.app = this.props.App;
	}

	isNewUser() {
		return true;
	}

	search() {
		const nameVal = document.getElementById("name").value;
		const budgetVal = document.getElementById("budget").value;
		const productVal = document.getElementById("product").value;
		let volumeVal = document.getElementById("volume").value;
    if (nameVal && !isNaN(budgetVal) && Number(budgetVal) > 0 && productVal 
    	&& (!volumeVal || (volumeVal && !isNaN(volumeVal) 
    	&& Number(volumeVal) > 0))) {
    	if (volumeVal) {
    		volumeVal = Number(volumeVal);
    	} else {
    		volumeVal = -1;
    	}
    	const data = {
    		name: nameVal,
    		budget: Number(budgetVal),
    		product: productVal,
    		volume: volumeVal
    	}
    	this.setState(data);
      this.app.search(data);
    } else {
      alert("You need to enter something in the first three fields (and have " +
      	"a positive number for the budget, and also for the volume if you " + 
      	"have entered a value for it)");
    }
	}

	static updateHomeForm(data) {
		const { name, budget, product, volume } = data;
		document.getElementById("name").value = name;
		document.getElementById("budget").value = budget;
		document.getElementById("product").value = product;
		let vol = volume;
		if (volume < 0) {
			vol = "";
		}
		document.getElementById("volume").value = vol;
	}

	render() {
		return (
			<div className="home modal flex-col card">
				<h1 id="welcome">Search Efficient Products</h1>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" required minLength="2" />
				<label htmlFor="budget">Budget</label>
				<input type="number" id="budget" name="budget" required min="0" />
				<label htmlFor="product_type">product type</label>
				<DropDown name="product_type" id="product" itemList={this.products} />
				<label htmlFor="budget">Volume Threshold in ft<sup>3</sup> (optional)
				</label>
				<input id="volume" name="volume" min="1" />
				<button id="submit" onClick={this.search}>Search</button>
			</div>
		);
	}
}

export default Home;
