// modules/storage.js
const STORAGE_KEY = 'todoAppData';

const storage = {
	save(data) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	},

	load() {
		const data = localStorage.getItem(STORAGE_KEY);
		return data ? JSON.parse(data) : null;
	},

	clear() {
		localStorage.removeItem(STORAGE_KEY);
	},
};

export default storage;
