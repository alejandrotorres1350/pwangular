import { Injectable } from '@angular/core';
import {Producto} from './producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  /*private data: { [id: number]: Producto } = {
    1: { id: 1, Nombre: 'Mercurio', Codigo: 'X001', Medida: 'litros' },
    2: { id: 2, Nombre: 'Agua', Codigo: 'X002', Medida: 'litros' },
    3: { id: 3, Nombre: 'Leche', Codigo: 'X003', Medida: 'litros' },
    4: { id: 4, Nombre: 'Soda', Codigo: 'X004', Medida: 'litros' },
  };*/

  private data = [
    { id: 0, Nombre: 'Mercurio', Codigo: 'X001', Medida: 'litros' },
    { id: 1, Nombre: 'Agua', Codigo: 'X002', Medida: 'litros' },
    { id: 2, Nombre: 'Leche', Codigo: 'X003', Medida: 'litros' },
    { id: 3, Nombre: 'Soda', Codigo: 'X004', Medida: 'litros' },
    { id: 4, Nombre: 'Crema', Codigo: 'X005', Medida: 'litros' },
  ];

  constructor() { }

  findAll(): Producto[] {
    return Object.values(this.data);
  }

  find(id: number) {
    return this.data[id];
  }

  delete(id: number) {
    console.log('Serice Index ' + id);
    this.data.splice(id, 1);
  }

  add(name: string, code: string, med: string) {
    const producto: Producto = {id: 6, Nombre: name, Codigo: code, Medida: med};
    this.data.push(producto);
  }

  update(ide: number, name: string, code: string, med: string) {
    const producto: Producto = {id: ide, Nombre: name, Codigo: code, Medida: med};
    this.data[ide] = producto;
  }
}
