import {html} from 'lit-html';

const dom = (() => {
	const newEl = (type, text, id, cssClass) => {
		const el = document.createElement(type);
		if (text) {
			el.textContent = text;
		}
		if (id) {
			el.id = id;
		}
		if (cssClass) {
			el.classList.add(cssClass);
		}
		return el;
	};
	const attachDropDown = (container, itemList) => {
		const options = itemList.forEach(e => {
			container.appendChild(getDropDownOption(e));
		});
	};
	const getDropDownOption = (val) => {
		const opt = newEl("option", val, null, null);
		opt.value = val;
		return opt;
	}
	return {
		newEl,
		attachDropDown,
	};
})();

export default dom;
