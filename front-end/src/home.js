const home = (() => {
	const getDOM = () => {
		const content = newEl("div", null, "content");
		return content;
	};
	const newEl = (type, text, id) => {
		const el = document.createElement(type);
		if (text) {
			el.textContent = text;
		}
		if (id) {
			el.id = id;
		}
		return el;
	};
	return {
		getDOM,
	};
})();

export default home;