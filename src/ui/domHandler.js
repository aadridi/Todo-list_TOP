import todoManager from '../modules/todoManager.js';
import { formatDistance } from 'date-fns';

const domHandler = (() => {
	const projectContainer = document.querySelector('#projectList');
	const todoContainer = document.querySelector('#todoList');

	// --- RENDER PROJECTS ---
	function renderProjects(projects) {
		projectContainer.innerHTML = '';
		const projectsUl = document.createElement('ul');

		projects.forEach((project) => {
			const projectLi = document.createElement('li');

			const projectTitle = document.createElement('h3');
			projectTitle.textContent = project.title;

			const projectDescription = document.createElement('p');
			projectDescription.textContent = project.description || 'No description provided';

			projectLi.append(projectTitle, projectDescription);
			projectsUl.appendChild(projectLi);
		});

		projectContainer.appendChild(projectsUl);
	}

	// --- RENDER TODOS ---
	function renderTodos(projectId) {
		todoContainer.innerHTML = '';
		const todosUl = document.createElement('ul');
		const todosProject = todoManager.getTodosByProject(projectId);

		todosProject.forEach((todo) => {
			const todoLi = document.createElement('li');

			const todoTitle = document.createElement('h3');
			todoTitle.textContent = todo.title;

			const todoDescription = document.createElement('p');
			todoDescription.textContent = todo.description || 'No description';

			const todoCreated = document.createElement('p');
			todoCreated.textContent = `Created: ${todo.createdDate.toLocaleDateString()}`;

			const todoDueDate = document.createElement('p');
			todoDueDate.textContent = `Due date: ${todo.dueDate.toLocaleDateString()}`;

			const todoTimeToComplete = document.createElement('p');
			const timeForCompletion = formatDistance(new Date(todo.dueDate), new Date(todo.createdDate));
			todoTimeToComplete.textContent = `Time to complete: ${timeForCompletion}`;

			const todoPrio = document.createElement('p');
			todoPrio.textContent = `Priority: ${todo.priority}`;

			const todoCompletedDiv = document.createElement('div');
			const todoCompletedLabel = document.createElement('label');
			todoCompletedLabel.textContent = 'Completed';
			todoCompletedLabel.setAttribute('for', `completed-${todo.id}`);

			const todoCompleted = document.createElement('input');
			todoCompleted.type = 'checkbox';
			todoCompleted.name = 'completed';
			todoCompleted.id = `completed-${todo.id}`;
			todoCompleted.checked = !!todo.completed;

			todoCompletedDiv.append(todoCompletedLabel, todoCompleted);

			todoLi.append(todoTitle, todoDescription, todoCreated, todoDueDate, todoTimeToComplete, todoPrio, todoCompletedDiv);

			todosUl.appendChild(todoLi);
		});

		todoContainer.appendChild(todosUl);
	}

	// --- CLEAR DISPLAY ---
	function clearDisplay() {
		projectContainer.innerHTML = '';
		todoContainer.innerHTML = '';
	}

	return { renderProjects, renderTodos, clearDisplay };
})();

export default domHandler;
