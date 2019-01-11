import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FiltrarTareasComponent } from './filtrar-tareas/filtrar-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    ListaTareasComponent,
    FiltrarTareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
