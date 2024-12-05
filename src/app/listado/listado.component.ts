import { Component } from '@angular/core';
import { ActividadComponent } from "../actividad/actividad.component";
import { ActividadesService } from '../servicios/actividades.service';

@Component({
  selector: 'app-listado',
  imports: [ActividadComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {
  constructor(private actividades: ActividadesService) { }
  listaActividades = this.actividades.lista;
}
