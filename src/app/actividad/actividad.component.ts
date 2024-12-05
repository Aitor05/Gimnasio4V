import { Component, input } from '@angular/core';

@Component({
  selector: 'tr[app-actividad]',
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  fecha = input("Fecha");
  lugar = input("Lugar");
  monitor = input("Monitor");
  tipo = input("Tipo");
}
