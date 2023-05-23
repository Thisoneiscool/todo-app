import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo] Add Todos',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todos',
  props<{ id: number }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todos',
  props<{ todo: Todo }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);