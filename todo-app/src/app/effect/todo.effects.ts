import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from '../store/todo.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { Todo } from '../model/todo.model';
import { TodoService } from '../todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );
}
