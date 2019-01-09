import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { pureArrayDef, asProviderData } from '@angular/core/src/view';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';


@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input() arrData;
  @Output() borra = new EventEmitter;

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
  constructor() { }

  ngOnInit() {
  }

}
