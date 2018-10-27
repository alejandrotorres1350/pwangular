import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';

@Component({
  selector: 'app-productos-eliminar',
  templateUrl: './productos-eliminar.component.html',
  styleUrls: ['./productos-eliminar.component.css']
})
export class ProductosEliminarComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private service: ProductoService) { }

  ngOnInit() {
    this.service.findAll()
    .subscribe(productos => this.productos = productos);
  }

  deleteItem(index: number) {

    this.service.delete(index)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    // console.log('Component index ' + index);
    // this.service.delete(index);
  }
}
