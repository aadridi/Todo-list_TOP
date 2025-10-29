import createProject from './project.js';
import createTodo from './todo.js';
import storage from '../storage/localStorage.js';

const appController = (() => {
	let projects = [];
	let currentProjectId = null;

	// Charger depuis localStorage
	const savedData = storage.load();
	if (savedData) {
		projects = savedData.projects || [];
		currentProjectId = savedData.currentProjectId || null;
	}

	function getProjects() {
		return projects;
	}

	function getCurrentProject() {
		return projects.find((p) => p.id === currentProjectId) || projects[0];
	}

	function addProject(title, description) {
		const newProject = createProject(title, description);
		projects.push(newProject);
		currentProjectId = newProject.id;
		save();
		return newProject;
	}

	function addTodo(title, priority, dueDate, projectId) {
		const project = projects.find((p) => p.id === projectId);
		if (!project) return;
		const newTodo = createTodo(title, priority, dueDate);
		project.todos.push(newTodo);
		save();
	}

	function save() {
		storage.save({ projects, currentProjectId });
	}

	return {
		getProjects,
		getCurrentProject,
		addProject,
		addTodo,
		save,
	};
})();

export default appController;
