import { Component } from '@angular/core';
import { Task } from './task.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Array<Task> = JSON.parse(localStorage.getItem('tareas')) || [];
  tareasFiltradas: Array<Task> = this.tareas;
  query: string = '';

  persistirTareas(){
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }
  
  actualizarModelo(){
    this.persistirTareas();
    this.filtrarTareas(this.query);
  }

  anyadeTarea(text){
    let newTask:Task = {text, id:Date.now(), completada:false};
    this.tareas.push(newTask);
    this.actualizarModelo();
  }

  alternarCompletada(id){
    this.tareas = this.tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;    
    })
  
  }

  filtrarTareas(query:string){
    this.query = query;
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.text.match(this.query));
  }

  borrarFiltro(){
    this.tareasFiltradas = this.tareas;
    this.query = '';
    this.actualizarModelo();
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    this.filtrarTareas(this.query);
    this.actualizarModelo();
  }

}
