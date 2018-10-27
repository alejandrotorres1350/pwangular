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
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  producto: Producto;
  cantprod: Productocantidad2[] = [];
  venta: Venta;
  productoaux = {nombre: '', codigo: '', medida: '', precio: ''};
  total = 0;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private service: ProductoService, private cpservice: ProdcantService,
    private sventa: VentaService) { }

  ngOnInit() {
    console.log('Init -------------------------------');
    this.sventa.find(1).subscribe(venta => this.venta = venta);
    console.log('sventa -------------------------------');
    this.cpservice.findAll().subscribe(cantprod => this.cantprod = cantprod);
    console.log('cpservice -------------------------------');
  }

  agregarmonto() {
    // this.total = this.total + monto;
    let sum = 0;
    for (let i = 0; i < this.cantprod.length; i++) {
      sum += this.cantprod[i].cantidad * this.cantprod[i].producto.precio;
    }
    return sum;
  }
}
