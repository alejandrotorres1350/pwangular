import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto} from './producto';
import {Venta} from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  private data = [];

  findAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>('http://localhost:8080/ventas', {withCredentials: true});
  }

  find(id: number): Observable<Venta> {
    const str1 = 'http://localhost:8080/ventas/';
    const str2 = str1.concat( id.toString() );
    console.log(str2);
    return this.http.get<Venta>(str2, {withCredentials: true});
  }

  add(venta: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/ventas/crear', venta, {withCredentials: true});
  }

  update(ide: number, value: any): Observable<Object> {
    const str1 = 'http://localhost:8080/ventas/update/';
    const str2 = str1.concat( ide.toString() );
    console.log(str2);
    return this.http.put(str2, value, {withCredentials: true});
  }
  delete(id: number): Observable<any> {
    const str1 = 'http://localhost:8080/ventas/delete/';
    const str2 = str1.concat( id.toString() );
    console.log(str2);
    return this.http.delete(str2, { responseType: 'text', withCredentials: true});
  }
}
