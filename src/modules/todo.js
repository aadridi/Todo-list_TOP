import { format } from 'date-fns';

function createTodo(title, description, dueDate, priority, projectId) {
	return {
		id: crypto.randomUUID(),
		title,
		description,
		createdDate: new Date(),
		dueDate: dueDate ? new Date(dueDate) : null,
		priority,
		completed: false,
		projectId,

		toggleCompleted() {
			this.completed = !this.completed;
		},

		update(fields) {
			Object.assign(this, fields);
		},
	};
}

export default createTodo;
