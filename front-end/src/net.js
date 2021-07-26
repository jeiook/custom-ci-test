const net = (() => {
	const url = "./api/visitors";
	const post = (str, route=url) => {
		let xhr = new XMLHttpRequest();
		xhr.open("POST", route, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
		   if (xhr.readyState === 4) {
		   	console.log("post status: " + xhr.status);
		   	console.log("response for post: " + xhr.responseText);
		   }};
		let data = str;
		xhr.send(data);
	};
	const get = (route=url) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", route, true);
		xhr.onreadystatechange = function () {
		   if (xhr.readyState === 4) {
		      console.log(xhr.status);
		      console.log("response for get: " + xhr.responseText);
		   }};
		xhr.send();
	};
	return {
		post,
		get,
	}
})();

export default net;
