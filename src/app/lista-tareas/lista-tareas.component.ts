import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input() arrData;
  @Output() alternarCompletada = new EventEmitter();
  @Output() borrarTarea = new EventEmitter();
  
  
  eliminar(id) {
    this.borrarTarea.emit(id);
  }

  emitirCambioCompletada(id){
    this.alternarCompletada.emit(id);
  }

    
  constructor() { }

  ngOnInit() {
  }

}
