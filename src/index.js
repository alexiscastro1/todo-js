import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) ); // forma 1
todoList.todos.forEach( crearTodoHtml ); // forma 2

console.log( 'todos', todoList.todos );