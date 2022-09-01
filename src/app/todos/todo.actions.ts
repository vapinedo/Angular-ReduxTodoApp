import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Todo Create',
  props<{ text: string }>()
);

export const toggle = createAction(
  "[TODO] Toggle Todo",
  props<{ id: number }>()
);
