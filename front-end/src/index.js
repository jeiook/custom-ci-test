import home from './home.js';

const interaction = (() => {
	const url = "./api/visitors";
	const main = () => {
		document.body.appendChild(home.getDOM());
	};
	const post = (str) => {
		let xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
		   if (xhr.readyState === 4) {
		   	console.log("post status: " + xhr.status);
		   	console.log("response for post: " + xhr.responseText);
		   }};
		let data = `{
			"name": "${str}"
		}`;
		xhr.send(data);
	};
	const get = () => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function () {
		   if (xhr.readyState === 4) {
		      console.log(xhr.status);
		      console.log("response for get: " + xhr.responseText);
		   }};
		xhr.send();
	};
	const is_new_user = () => {
		return true;
	};
	return {
		main,
		is_new_user,
	};
})();

interaction.main();
