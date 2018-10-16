import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';

@Component({
  selector: 'app-productos-consultar',
  templateUrl: './productos-consultar.component.html',
  styleUrls: ['./productos-consultar.component.css']
})
export class ProductosConsultarComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.productos = this.service.findAll();
  }
}
