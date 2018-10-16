import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto;
  productoaux = {nombre: '', codigo: '', medida: ''};
  id = 0;
  constructor(
    private route: ActivatedRoute,
    private service: ProductoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => this.producto = this.service.find(+params.get('id'))
    );
    this.id = this.producto.id;
    this.productoaux.nombre = this.producto.Nombre;
    this.productoaux.codigo = this.producto.Codigo;
    this.productoaux.medida = this.producto.Medida;
  }

  actualizarproducto() {
    this.service.update(this.id, this.productoaux.nombre, this.productoaux.codigo, this.productoaux.medida);
  }

}
