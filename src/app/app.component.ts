import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas = [];
  title = 'angular-exampleList';
  anyadeTarea(tareaTxt){
    this.tareas.push(tareaTxt);
  }
}
