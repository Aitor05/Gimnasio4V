import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor() { }
  lista = [
    {
      fecha: '10/08/2014 00:00',
      lugar: 'Aula02',
      monitor: 'Miguel Goyena',
      tipo: ''
    },
    {
      fecha: '',
      lugar: '',
      monitor: '',
      tipo: ''
    }
  ]
}
