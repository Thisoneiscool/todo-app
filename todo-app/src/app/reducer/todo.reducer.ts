import { createReducer, on } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import {
  addTodo,
  deleteTodo,
  loadTodosSuccess,
  updateTodo,
} from '../store/todo.actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((item) => item.id !== id),
  })),
  on(updateTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((item) => (item.id === todo.id ? todo : item)),
  }))
);
