import home from './home.js';
import './style.css';

const interaction = (() => {
	const main = () => {
		home.load();
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
