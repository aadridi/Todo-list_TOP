/* todoManager.js

Rôle : orchestrer les interactions entre todos et projects.

🔸 Contient :

Les structures principales :

const projects = {};
const todos = {};


Les fonctions :

createProject(name)

deleteProject(id)

createTodo(title, desc, date, priority, projectId)

deleteTodo(id)

getTodosByProject(projectId)

toggleTodoCompleted(id)

updateTodo(id, updatedFields)

💡 C’est ton chef d’orchestre.
C’est lui que tu vas manipuler dans la console pour tester ta logique avant de coder l’UI. */