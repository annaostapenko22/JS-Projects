import shortid from 'short-id';
import task from './task.hbs';
import "./style.css"
const refs = {
  form: document.querySelector('#todoForm'),
  todoList: document.querySelector('ul.todoList'),
  // deleteBtn: document.querySelector(".deleteBtn")
};


const getTodo = evt => {
  evt.preventDefault();
  const [title, description, priority] = evt.target.elements;
  const todoTask = {
    id: "a" + shortid.generate(),
    title: title.value,
    description: description.value,
    priority: priority.value,
  };
  
    const taskItem = getTask(todoTask);
  
    refs.todoList.insertAdjacentHTML('beforeend', taskItem);
  
  console.log(todoTask)
  let deleteBtn = document.querySelector(`#${todoTask.id} .deleteBtn`);

  deleteBtn.addEventListener('click', (evt) => {
    const target = evt.currentTarget
    refs.todoList.removeChild(target.closest("li"))
  });

};

const getTask = elem => {
  const taskItem = task(elem);
  return taskItem;
};


refs.form.addEventListener('submit', getTodo);
