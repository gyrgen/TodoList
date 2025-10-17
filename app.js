'use strict';

const taskInput = document.querySelector('taskInput');
const addButton = document.querySelector('addButton');
const taskList = document.querySelector('taskList');

function addTask() {
	const taskText = taskInput.value.trim();
	if (taskText = '') {
		return
	};
	const li = document.createElement('li');
	li.textContent = taskText;

	taskList.appendChild(li);

	taskInput.value = '';
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', event => {
	if (event.key === 'Enter') {
		addTask();
	};
});