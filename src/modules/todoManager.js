const todoManager = (() => {
	const todos = [];
	const projects = [];

	// Functions related to managing projects
	function addProject(project) {
		if (!projects.find((p) => p.id === project.id)) projects.push(project);
	}

	function removeProject(id) {
		const index = projects.findIndex((project) => project.id === id);
		if (index !== -1) projects.splice(index, 1);
	}

	function getProject(id) {
		return projects.find((project) => project.id === id);
	}
	function getAllProjects() {
		return [...projects];
	}
	function getTodosByProject(projectId) {
		return todos.filter((todo) => todo.projectId === projectId);
	}

	// Functions related to managins todos
	function addTodo(todo) {
		todos.push(todo);
	}

	function removeTodo(id) {
		const index = todos.findIndex((todo) => todo.id === id);
		if (index !== -1) todos.splice(index, 1);
	}

	function getTodo(id) {
		return todos.find((todo) => todo.id === id);
	}

	function getAllTodos() {
		return [...todos];
	}

	return { addProject, removeProject, getProject, getAllProjects, getTodosByProject, addTodo, removeTodo, getTodo, getAllTodos };
})();

export default todoManager;
