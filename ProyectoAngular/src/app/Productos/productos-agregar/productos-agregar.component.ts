import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from './../shared/producto.service';



@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent implements OnInit {
  producto = {nombre: '', codigo: '', medida: ''};
  constructor(
    private route: ActivatedRoute,
    private service: ProductoService) { }

  ngOnInit() {
    /*this.route.paramMap.subscribe(
      (params: ParamMap) => this.person = this.service.find(+params.get('id'))
    );*/
  }
  agregarproducto() {
    const nombre = this.producto.nombre;
    const codigo = this.producto.codigo;
    const medida = this.producto.medida;
    this.service.add(nombre, codigo, medida);
  }

}
