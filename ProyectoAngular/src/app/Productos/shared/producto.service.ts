import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  /*private data = [
    { id: 0, Nombre: 'Mercurio', Codigo: 'X001', Medida: 'litros' },
    { id: 1, Nombre: 'Agua', Codigo: 'X002', Medida: 'litros' },
    { id: 2, Nombre: 'Leche', Codigo: 'X003', Medida: 'litros' },
    { id: 3, Nombre: 'Soda', Codigo: 'X004', Medida: 'litros' },
    { id: 4, Nombre: 'Crema', Codigo: 'X005', Medida: 'litros' },
  ];*/

  constructor(private http: HttpClient) { }

  private data = [];

/*  findAll(): Producto[] {
    return Object.values(this.data);
  }*/

  findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:8080/productos', {withCredentials: true});

  }

  find(id: number): Observable<Producto> {
     const str1 = 'http://localhost:8080/productos/';
     const str2 = str1.concat( id.toString() );
     console.log(str2);
     return this.http.get<Producto>(str2, {withCredentials: true});
    // return this.http.get<Producto>('http://localhost:8080/productos/3');
  }

  /*find(id: number) {
    return this.data[id];
  }*/

  delete(id: number): Observable<any> {
    const str1 = 'http://localhost:8080/productos/delete/';
    const str2 = str1.concat( id.toString() );
    console.log(str2);
    // this.http.delete(str2);
    // return this.http.delete(str2, { responseType: 'text' });
    return this.http.delete(str2, { responseType: 'text', withCredentials: true });
   // return this.http.get<Producto>('http://localhost:8080/productos/3');
 }

  /*delete(id: number) {
    console.log('Serice Index ' + id);
    this.data.splice(id, 1);
  }*/

  add(producto: Object): Observable<Object> {
    // const nid = this.data.length;
    // const producto: Producto = {id: nid, nombre: name, sku: code, unidadMedida: med};
    // this.data.push(producto);
    return this.http.post('http://localhost:8080/productos/crear', producto, {withCredentials: true});
  }

  update(ide: number, value: any): Observable<Object> {
    // const producto: Producto = {id: ide, nombre: name, sku: code, unidadMedida: med};
    // this.data[ide] = producto;
    const str1 = 'http://localhost:8080/productos/update/';
    const str2 = str1.concat( ide.toString() );
    console.log(str2);
    return this.http.put(str2, value, {withCredentials: true});
  }
}
