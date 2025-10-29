import './styles.css';
import domHandler from './ui/domHandler.js';
import todoManager from './modules/todoManager.js';
import createProject from './modules/project.js';
import createTodo from './modules/todo.js';
import { initEventListeners } from './ui/eventListeners';

// --- CRÉATION DE PROJETS ---
const project1 = createProject('Apprendre JavaScript', "Projet d'apprentissage progressif de JS");
const project2 = createProject('Cuisine maison', 'Recettes faciles et rapides');
const project3 = createProject('Lecture', 'Relire Dostoïevski');

// --- AJOUT DANS LE GESTIONNAIRE DE TODOS ---
todoManager.addProject(project1);
todoManager.addProject(project2);
todoManager.addProject(project3);

// --- CRÉATION DE QUELQUES TODOS ---
const todo1 = createTodo('Faire les exercices de boucles', 'Pratiquer les for/while', '2025-11-05', 'high', project1.id);
const todo2 = createTodo('Revoir les fonctions fléchées', 'Faire un mini-projet pratique', '2025-11-10', 'medium', project1.id);

const todo3 = createTodo('Cuisiner des lasagnes', 'Essayer une version végétarienne', '2025-10-30', 'low', project2.id);
const todo4 = createTodo('Faire du pain maison', 'Tester la levure sèche', '2025-10-31', 'medium', project2.id);

const todo5 = createTodo('Lire Crime et Châtiment', 'Chapitres 1 à 5', '2025-11-15', 'high', project3.id);
const todo6 = createTodo('Écrire un résumé', 'Synthèse du livre', '2025-11-25', 'medium', project3.id);

// --- AJOUT DES TODOS DANS LE GESTIONNAIRE ---
todoManager.addTodo(todo1);
todoManager.addTodo(todo2);
todoManager.addTodo(todo3);
todoManager.addTodo(todo4);
todoManager.addTodo(todo5);
todoManager.addTodo(todo6);

// --- AFFICHAGE DES PROJETS ---
domHandler.renderProjects(todoManager.getAllProjects());

// --- TEST : afficher les todos d’un projet précis (par exemple le premier) ---
domHandler.renderTodos(project1.id);

initEventListeners();
