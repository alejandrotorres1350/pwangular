import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto} from './producto';
import {Venta} from './venta';
import {Productocantidad2} from './productocantidad2';

@Injectable({
  providedIn: 'root'
})
export class ProdcantService {

  constructor(private http: HttpClient) { }

  private data = [];

  findAll(): Observable<Productocantidad2[]> {
    return this.http.get<Productocantidad2[]>('http://localhost:8080/productocantidad', {withCredentials: true});
  }

  find(id: number): Observable<Productocantidad2> {
     const str1 = 'http://localhost:8080/productocantidad/';
     const str2 = str1.concat( id.toString() );
     console.log(str2);
     return this.http.get<Productocantidad2>(str2, {withCredentials: true});
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
    return this.http.delete(str2, { responseType: 'text' , withCredentials: true});
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
    return this.http.post('http://localhost:8080/productocantidad/crear', producto, {withCredentials: true});
  }

  update(ide: number, value: any): Observable<Object> {
    // const producto: Producto = {id: ide, nombre: name, sku: code, unidadMedida: med};
    // this.data[ide] = producto;
    const str1 = 'http://localhost:8080/productocantidad/update/';
    const str2 = str1.concat( ide.toString() );
    console.log(str2);
    return this.http.put(str2, value, {withCredentials: true});
  }
}
