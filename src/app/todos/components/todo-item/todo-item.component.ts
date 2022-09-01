import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { FormControl, Validators } from '@angular/forms';
import { borrar, editar, toggle } from '../../todo.actions';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | null = null;
  @ViewChild("inputFisico") txtInputFisico!: ElementRef; 

  chkCompletado!: FormControl; 
  txtInput!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo?.isCompleted);
    this.txtInput = new FormControl(this.todo?.text, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      if (this.todo !== null) {
        this.store.dispatch(toggle({ id: this.todo.id }));
      }
    })
  }

  editar(): void {
    this.editando = true;
    this.txtInput.setValue(this.todo?.text);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 0);
  }

  terminarEdicion(): void {
    this.editando = false;

    if(this.txtInput.invalid) { return; }

    if (this.todo !== null) {
      this.store.dispatch(editar({  
        id: this.todo.id,
        text: this.txtInput.value
      }));
    }
  }

  borrar() {
    if(this.todo !== null) {
      this.store.dispatch(borrar({ id: this.todo.id }));
    }
  }

}
