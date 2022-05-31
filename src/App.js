import React from 'react';

import {TodoCounter } from './todoCounter';
import {CreateTodoButton} from './createTodoButton';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import {TodoSearch} from './todoSearch'

const todos = [
  { text: 'cortar cabello', completed: false},
  { text: 'comer', completed: true},
  { text: 'leer', completed: true},
]

function App(){
  return (
  // react interpreta las llaves vacias como un Fragment
    <>      
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
         { todos.map( todo => (
             <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
         ))}
       </TodoList>
      <CreateTodoButton/>
    </>
  );
};

export {App};