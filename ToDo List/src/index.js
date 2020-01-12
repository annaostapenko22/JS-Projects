import shortid from 'short-id';
import task from './task.hbs';
import './style.css';
import services from './services';
const refs = {
  form: document.querySelector('#todoForm'),
  todoList: document.querySelector('ul.todoList'),
};

const getTodo = async evt => {
  evt.preventDefault();
  const [title, description, priority] = evt.target.elements;
  const todoTask = {
    id: shortid.generate(),
    title: title.value,
    description: description.value,
    priority: priority.value,
  };

  const res = await services.addItem(todoTask);
  const uniqueID = res.data.name;
  insertTodoTask(todoTask, uniqueID);
  title.value = "";
  description.value = "";
  priority.value = "low";
};

const insertTodoTask = (todoTask, uniqueID) => {
  const taskItem = getTask({ ...todoTask, uniqueID });
  refs.todoList.insertAdjacentHTML('beforeend', taskItem);

  let deleteBtn = document.querySelector(`#${uniqueID} .deleteBtn`);

  deleteBtn.addEventListener('click', evt => {
    const target = evt.currentTarget;
    refs.todoList.removeChild(target.closest('li'));
    services.deleteItem(uniqueID);
  });
};

const getTask = elem => {
  const taskItem = task(elem);
  return taskItem;
};

refs.form.addEventListener('submit', getTodo);
window.onload = async () => {
  const res = await services.getAllItems();
  const items = Object.entries(res.data);
  items.forEach(elem => {
    insertTodoTask(elem[1], elem[0]);
  });
  console.log('sdfg', items);
};
