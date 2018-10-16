import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductoService } from './../shared/producto.service';

@Component({
  selector: 'app-productos-menu',
  templateUrl: './productos-menu.component.html',
  styleUrls: ['./productos-menu.component.css']
})
export class ProductosMenuComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ProductoService) { }

  ngOnInit() {
    /*this.route.paramMap.subscribe(
      (params: ParamMap) => this.person = this.service.find(+params.get('id'))
    );*/
  }

}
