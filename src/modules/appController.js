import createProject from './project.js';
import createTodo from './todo.js';
import todoManager from './todoManager.js';

const appController = (() => {
	const project_work = createProject('Mastering Front-End Development', 'The Odin Project');
	const project_personal = createProject('Fixing stuff in the house', 'Stuff that needs fixing');

	const todo_1 = createTodo('Foundations', 'Finish Foundations Chapter', '01/11/2025', 'high', project_work.id);
	const todo_2 = createTodo('Learning Vanilla JS', 'Start working on ToDo-List app', '30/10/2025', 'medium', project_work.id);
	const todo_3 = createTodo('Plumber', 'Call plumber to fix WC', '30/10/2025', 'high', project_personal.id);
	const todo_4 = createTodo('Electricity', "Fix lights in mom's room", '01/11/2025', 'low', project_personal.id);

	const init = () => {
		todoManager.addProject(project_work);
		todoManager.addProject(project_personal);
		[todo_1, todo_2, todo_3, todo_4].forEach(todoManager.addTodo);
	};

	const addNewProject = (title, description) => {
		const newProject = createProject(title, description);
		todoManager.addProject(newProject);
	};

	const addNewTodo = (title, description, dueDate, priority, projectId) => {
		const newTodo = createTodo(title, description, dueDate, priority, projectId);
		todoManager.addTodo(newTodo);
	};

	const displaySummary = () => {
		console.log('Projects:', todoManager.getAllProjects());
		console.log('Todos:', todoManager.getAllTodos());
	};

	return { init, addNewProject, addNewTodo, displaySummary };
})();

export default appController;
