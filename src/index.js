import './styles.css';
import createTodo from "./modules/todo.js";
import todoManager from './modules/todoManager.js';
import createProject from './modules/project.js';

const p1 = createProject('The Odin Project', 'Chemin full-stack JS');
todoManager.addProject(p1);

console.log(todoManager.getAllProjects());



