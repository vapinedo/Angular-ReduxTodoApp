import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle } from './todo.actions';

export const initialState: Todo[] = [
  new Todo("Save to world"),
  new Todo("Buy a monitor light bar"),
  new Todo("Buy a new laptop"),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      } else {
        return todo;
      }
    })
  }),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
