import dom from './dom.js';
import net from './net.js';
import {html, render} from 'lit-html';

const home = (() => {
	const productList = ["fridge", "air conditioner", "oven"];
	const load = () => {
		const domContent = html`
			<div id="content" class="home flex-col">
				<h2 id="welcome">First Time User?</h2>
				<label for="name">Name:</label>
				<input type="text" id="name" name="name">
				<label for="budget">Budget:</label>
				<input type="text" id="budget" name="budget">
				<select name="product_type" id="product"></select>
				<button id="submit">Find Recommendations</button>
			</div>
		`;
		render(domContent, document.body);
		const product = document.getElementById("product");
		dom.attachDropDown(product, productList);
		const btn = document.getElementById("submit");
		btn.onclick = sendInfo;
	};
	const sendInfo = () => {
		const name = document.getElementById("name").value;
		const budget = document.getElementById("budget").value;
		const product = document.getElementById("product").value;
		const items = [name, budget, product];
		if (name && !isNaN(budget) && product) {
			const info = {
				name,
				budget,
				product
			}
			net.post(JSON.stringify(info));
			alert("information sent!");
		}
		console.log(items);
	}
	return {
		load,
	};
})();

export default home;
