import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from './../shared/producto.service';
import { Producto } from '../shared/producto';



@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent implements OnInit {
  producto = {nombre: '', codigo: '', medida: '', precio: ''};
  product: Producto;
  constructor(
    private route: ActivatedRoute,
    private service: ProductoService) { }

  ngOnInit() {
    /*this.route.paramMap.subscribe(
      (params: ParamMap) => this.person = this.service.find(+params.get('id'))
    );*/
  }
  agregarproducto() {
    this.product = new Producto();
    this.product.nombre = this.producto.nombre;
    this.product.sku = this.producto.codigo;
    this.product.unidadMedida = this.producto.medida;
    this.product.precio = +this.producto.precio;
    this.service.add(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    /*const nombre = this.producto.nombre;
    const codigo = this.producto.codigo;
    const medida = this.producto.medida;
    this.service.add(nombre, codigo, medida);*/
  }

}
