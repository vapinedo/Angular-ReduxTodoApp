import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create } from './todo.actions';

export const initialState: Todo[] = [
  new Todo("Save to world"),
  new Todo("Buy a monitor light bar"),
  new Todo("Buy a new laptop"),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
