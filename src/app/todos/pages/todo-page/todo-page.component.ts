import { Store } from '@ngrx/store';
import * as actions from '../../todo.actions';
import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(actions.toggleAll({ completado: this.completado }));
  }

}
