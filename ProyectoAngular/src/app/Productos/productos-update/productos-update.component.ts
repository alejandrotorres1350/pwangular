import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from './../shared/producto.service';
import { Producto } from '../shared/producto';

@Component({
  selector: 'app-productos-update',
  templateUrl: './productos-update.component.html',
  styleUrls: ['./productos-update.component.css']
})
export class ProductosUpdateComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.service.findAll()
    .subscribe(productos => this.productos = productos);
  }

}
