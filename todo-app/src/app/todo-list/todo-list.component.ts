import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
import { TodoService } from '../todo.service';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, loadTodos, updateTodo } from '../store/todo.actions';
import { selectTodos } from '../selector/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  newTodo: string = '';

  constructor(private todoService: TodoService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$ = this.store.select(selectTodos);
  }

  add() {
    const todo: Todo = {
      id: new Date().getTime(),
      title: this.newTodo,
      completed: false,
    };
    this.store.dispatch(addTodo({ todo }));
    this.newTodo = '';
  }

  delete(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }

  edit(todo: Todo) {
    const updatedTodo: Todo = { ...todo, title: 'Updated Todo Item'};
    this.store.dispatch(updateTodo({ todo: updatedTodo }))
  }

  switch(todo: Todo) {
    const updatedTodo: Todo ={ ...todo, completed: !todo.completed };
    this.store.dispatch(updateTodo({ todo: updatedTodo }))
  }


}
