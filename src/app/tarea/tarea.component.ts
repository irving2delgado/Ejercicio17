import { Component } from '@angular/core';

// Definición de la interfaz Tarea
interface Tarea {
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  nuevaTarea: string = '';
  tareas: Tarea[] = [];

  // Método para agregar una nueva tarea
  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push({ nombre: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  // Método para marcar una tarea como completada
  completarTarea(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }

  // Método para eliminar una tarea
  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
