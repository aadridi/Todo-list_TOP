const todoManager = (() => {
	const todos = [];

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
		return todos;
	}

	return { addTodo, removeTodo, getTodo, getAllTodos };
})();

export default todoManager;
