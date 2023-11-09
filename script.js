const button = document.querySelector('.submit-button');
const input = document.querySelector('.notes-text-input');
const error = document.querySelector('.notes-error-text');
const list = document.querySelector('.notes-list');

button.addEventListener('click', (e)=>{
	e.preventDefault()

	
	if (input.value === ''){
		error.style.display = 'block';
		setTimeout(() => {
			error.style.display = 'none';
		}, 1000);
	} else {
		const listContainer = document.createElement('ul');
		const listItems = document.createElement('li');
		list.append(listContainer);
		listContainer.append(listItems);
		listItems.textContent = input.value;
		input.value = '';
	}	
})