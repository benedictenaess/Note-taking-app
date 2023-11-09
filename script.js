const button = document.querySelector('.submit-button');
const input = document.querySelector('.notes-text-input');
const error = document.querySelector('.notes-error');

button.addEventListener('click', (e)=>{
	e.preventDefault()
	if (input.value === ''){
		setInterval(() => {
			error.style.display = 'block';
		}, 0, 1000);
	}
	const listContainer = document.createElement('ul');
	const listItems = document.createElement('li');
})