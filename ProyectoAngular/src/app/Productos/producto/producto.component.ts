import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto;
  productoaux = {nombre: '', codigo: '', medida: '', precio: ''};
  id = 0;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private service: ProductoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: ParamMap) => {
      this.id = +params['id'];
    });
    console.log(this.id);
    this.service.find(this.id).subscribe(producto => this.producto = producto);
    /*this.route.paramMap.subscribe(
      (params: ParamMap) => this.producto = this.service.find(+params.get('id'))
    );*/
     /*this.id = this.producto.id;
     this.productoaux.nombre = this.producto.nombre;
     this.productoaux.codigo = this.producto.sku;
     this.productoaux.medida = this.producto.unidadMedida;
     this.productoaux.precio = String(this.producto.precio);*/
  }

  actualizarproducto() {
    this.service.update(this.id,
      // tslint:disable-next-line:max-line-length
      { nombre: this.productoaux.nombre, sku: this.productoaux.codigo, unidadMedida: this.productoaux.medida, precio: this.productoaux.precio})
      .subscribe(
        data => {
          console.log(data);
          this.producto = data as Producto;
        },
        error => console.log(error));
  }
  eliminarproducto() {
    this.service.delete(this.id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

}
