import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ListadoComponent } from "./listado/listado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gimnasio4V';
}
