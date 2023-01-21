let tasks = [];
export const renderTasks = () => {
  const container = document.getElementById('list');
  container.replaceChildren();
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const list = document.createElement('ul');
  list.setAttribute('class', 'list-group');
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const inputSpan = document.createElement('span');
    const listLink = document.createElement('a');
    listLink.style.cursor = 'pointer';
    listLink.setAttribute('class', 'text-secondary');
    listLink.style.float = 'right';
    const listMenu = document.createElement('i');
    listMenu.setAttribute('class', 'fa fa-ellipsis-v delete');
    listMenu.setAttribute('id', `delete_${tasks[i].index}`);
    listLink.appendChild(listMenu);
    const listContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('value', tasks[i].description);
    editInput.setAttribute('class', 'form-control edit-input');
    editInput.setAttribute('id', `list_${tasks[i].index}`);
    // editInput.style.display = "none";
    inputSpan.appendChild(editInput);
    checkbox.setAttribute('class', 'form-check-input me-3');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = tasks[i].completed;
    const spanText = document.createTextNode(tasks[i].description);
    span.appendChild(spanText);

    // creating col div for checkbox
    const checkboxDiv = document.createElement('div');
    checkboxDiv.setAttribute('class', 'col-md-1');
    checkboxDiv.appendChild(checkbox);

    // creating col div for list description span
    const spanDiv = document.createElement('div');
    spanDiv.setAttribute('class', 'col-md list-description');
    spanDiv.appendChild(span);

    // creating col div for input edit span
    const inputSpanDiv = document.createElement('div');
    inputSpanDiv.setAttribute('class', 'col-md edit-description');
    inputSpanDiv.style.display = 'none';
    inputSpanDiv.appendChild(inputSpan);

    // creating col div for link
    const listLinkDiv = document.createElement('div');
    listLinkDiv.setAttribute('class', 'col-md-1 link');
    listLinkDiv.appendChild(listLink);

    listContainer.appendChild(checkboxDiv);
    listContainer.appendChild(spanDiv);
    listContainer.appendChild(inputSpanDiv);
    listContainer.appendChild(listLinkDiv);
    listContainer.setAttribute('class', 'row');
    item.appendChild(listContainer);
    item.setAttribute('class', 'list-item');

    listContainer.addEventListener('click', () => {
      listMenu.classList.remove('fa-ellipsis-v');
      listMenu.classList.add('fa-trash');
      inputSpanDiv.style.display = 'block';
      spanDiv.style.display = 'none';
    });
    item.setAttribute('class', 'list-group-item');

    list.appendChild(item);
  }

  container.appendChild(list);
};

export { renderTasks as default };