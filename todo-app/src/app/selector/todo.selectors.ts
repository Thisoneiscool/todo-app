import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../reducer/todo.reducer";

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
)