import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input() arrData;
  @Output() alternarCompletada = new EventEmitter();

  borraTarea(tarea: string){ 
    let cont = 0;
    for(let tar of this.arrData){
      if(tar === tarea){
      break;
      }
      cont= cont + 1;
    }
    this.arrData.splice(cont,1);
  }


  emitirCambioCompletada(id){
    this.alternarCompletada.emit(id);
  }

  constructor() { }

  ngOnInit() {
  }

}
