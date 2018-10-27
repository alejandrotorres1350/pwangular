import { VentaService } from './../shared/venta.service';
import { Venta } from './../shared/venta';
import { Productocantidad2 } from './../shared/productocantidad2';
import { ProdcantService } from './../shared/prodcant.service';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-producto-cantidad',
  templateUrl: './producto-cantidad.component.html',
  styleUrls: ['./producto-cantidad.component.css']
})
export class ProductoCantidadComponent implements OnInit {
  producto: Producto;
  cantprod: Productocantidad2;
  venta: Venta;
  productoaux = {nombre: '', codigo: '', medida: '', precio: ''};
  id = 0;
  cantidad = 0;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private service: ProductoService, private cpservice: ProdcantService,
    private sventa: VentaService) { }

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

  agregaralcarrito() {
    console.log(this.cantidad * this.producto.precio);
    this.cantprod = new Productocantidad2();
    this.cantprod.producto = this.producto;
    this.cantprod.cantidad = this.cantidad;
    this.sventa.find(1).subscribe(venta => this.venta = venta);
    this.cantprod.venta = this.venta;
    this.cpservice.add(this.cantprod)
      .subscribe(data => console.log(data), error => console.log(error));
  }

}
