import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto';
import { ProductoService } from '../shared/producto.service';

@Component({
  selector: 'app-productos-comprar',
  templateUrl: './productos-comprar.component.html',
  styleUrls: ['./productos-comprar.component.css']
})
export class ProductosComprarComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.service.findAll().subscribe(productos => this.productos = productos);
  }

}
