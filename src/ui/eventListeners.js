import domHandler from './domHandler.js';
import appController from '../modules/appController.js';

export function initEventListeners() {
	const addProjectBtn = document.querySelector('#addProject');
	const addTodoBtn = document.querySelector('#addTodo');

	// Crée une seule fois la modale dans le DOM
	const modalOverlay = document.createElement('div');
	modalOverlay.classList.add('modal-overlay', 'hidden');
	document.body.appendChild(modalOverlay);

	// ➕ Ouvrir la modale pour créer un projet
	addProjectBtn.addEventListener('click', () => {
		openModal('project');
	});

	// ➕ Ouvrir la modale pour créer une todo
	addTodoBtn.addEventListener('click', () => {
		openModal('todo');
	});

	// ===========================
	// 💡 Fonction d'ouverture
	// ===========================
	function openModal(type) {
		modalOverlay.innerHTML = `
      <div class="modal">
        <button class="modal-close">&times;</button>
        <h2>${type === 'project' ? 'Nouveau projet' : 'Nouvelle tâche'}</h2>
        <form id="modal-form">
          ${getFormFields(type)}
          <button type="submit" class="modal-submit">Ajouter</button>
        </form>
      </div>
    `;

		modalOverlay.classList.remove('hidden');

		// Fermer en cliquant dehors
		modalOverlay.addEventListener('click', (e) => {
			if (e.target === modalOverlay) closeModal();
		});

		// Fermer via la croix
		modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);

		// Soumission du formulaire
		const form = modalOverlay.querySelector('#modal-form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const formData = new FormData(e.target);
			const data = Object.fromEntries(formData);

			if (type === 'project') {
				appController.addProject(data.name, data.description);
				domHandler.renderProjects(appController.getProjects());
			} else {
				appController.addTodo(data.title, data.priority, data.dueDate, appController.getCurrentProject());
				domHandler.renderTodos(appController.getCurrentProject().todos);
			}

			closeModal();
		});
	}

	// ===========================
	// 💡 Fonction de fermeture
	// ===========================
	function closeModal() {
		modalOverlay.classList.add('hidden');
	}

	// ===========================
	// 💡 Champs du formulaire
	// ===========================
	function getFormFields(type) {
		if (type === 'project') {
			return `
        <label>Nom du projet</label>
        <input type="text" name="name" required />
        <label>Description</label>
        <textarea name="description"></textarea>
      `;
		} else {
			return `
        <label>Titre de la tâche</label>
        <input type="text" name="title" required />
        <label>Priorité</label>
        <select name="priority">
          <option value="Faible">Faible</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Haute">Haute</option>
        </select>
        <label>Date d’échéance</label>
        <input type="date" name="dueDate" />
      `;
		}
	}
}
