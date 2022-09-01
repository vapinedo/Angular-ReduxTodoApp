import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Todo Create',
  props<{ text: string }>()
);

export const toggle = createAction(
  "[TODO] Toggle Todo",
  props<{ id: number }>()
);

export const editar = createAction(
  "[TODO] Editar TODO",
  props<{ id: number, text: string }>()
);
