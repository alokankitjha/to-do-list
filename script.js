document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'done';
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed', checkbox.checked);
        });

        const dataDiv = document.createElement('div');
        dataDiv.className = 'data';
        dataDiv.textContent = taskText;

        const editSpan = document.createElement('span');
        editSpan.className = 'edit';
        editSpan.innerHTML = '<i class="fas fa-edit"></i>';
        editSpan.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                dataDiv.textContent = newTaskText.trim();
            }
        });

        const deleteSpan = document.createElement('span');
        deleteSpan.className = 'del';
        deleteSpan.innerHTML = '<i class="fas fa-trash"></i>';
        deleteSpan.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(dataDiv);
        listItem.appendChild(editSpan);
        listItem.appendChild(deleteSpan);

        taskList.appendChild(listItem);
        taskInput.value = '';
    });
});
