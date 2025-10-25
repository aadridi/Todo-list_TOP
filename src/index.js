import './styles.css';

localStorage.setItem('Test', 'Akrame');
const testPrenom = localStorage.getItem('Test');
console.log('Hello ' + testPrenom);
