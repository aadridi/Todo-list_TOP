import './styles.css';
import createTodo from "./modules/todo.js";
import todoManager from './modules/todoManager.js';

const testTodo = createTodo('Apprendre JS', 'Continuer The Odin Project', new Date('2025-12-31'), 'high', '1');
console.log(testTodo);
todoManager.addTodo(testTodo);

const testTodo2 = todoManager.getAllTodos();
console.log(testTodo2);

