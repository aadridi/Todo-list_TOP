import { format } from 'date-fns';

function createProject(title, description) {
	return {
		id: crypto.randomUUID(),
		title,
		description: description || 'my project',
		createdDate: format(new Date(), 'dd/MM/yyyy'),

		update(fields) {
			Object.assign(this, fields);
		},
	};
}

export default createProject;
