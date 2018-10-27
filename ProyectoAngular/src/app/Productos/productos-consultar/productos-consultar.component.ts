import { VentaService } from './../shared/venta.service';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';
import { Venta } from '../shared/venta';
import { Productocantidad2 } from '../shared/productocantidad2';
import { ProdcantService } from '../shared/prodcant.service';

@Component({
  selector: 'app-productos-consultar',
  templateUrl: './productos-consultar.component.html',
  styleUrls: ['./productos-consultar.component.css']
})
export class ProductosConsultarComponent implements OnInit {
  productos: Producto[] = [];
  ventas: Venta[] = [];
  productocants: Productocantidad2[] = [];
  constructor(private service: ProductoService, private pcservice: ProdcantService) { }

  ngOnInit() {
    this.service.findAll().subscribe(productos => this.productos = productos);
  }
}
