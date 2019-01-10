import { Component } from '@angular/core';
import { Task } from './task.interface';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Array<Task> = [];
  title = 'angular-exampleList';
  anyadeTarea(text){
    let newTask:Task = {text, id:Date.now(), completada:false};
    this.tareas.push(newTask);
    // this.filtrarTareas(this.query);
  }

  alternarCompletada(id){
    this.tareas = this.tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;    
    })
  }

}
