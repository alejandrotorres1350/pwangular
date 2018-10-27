import { Component, OnInit } from '@angular/core';
import { RestclientServiceService } from './../shared/restclient-service.service';
import { ProductoService } from '../shared/producto.service';
import { Producto } from '../shared/producto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = 'bodega';
  password = 'bodega';
  producto: Producto;

  result: any;

  message: any;
  constructor(private restClient: RestclientServiceService, private service: ProductoService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.restClient.login(this.user, this.password).subscribe(data => {
        this.message = 'Login Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }

  getTestData() {
    this.restClient.getTestData().subscribe(
      data => {
        console.log('Success' + data);
        this.message = JSON.stringify(data);
      },
      error => {
        console.error(error);
        this.message = JSON.stringify(error);
      }
    );
    this.service.find(1).subscribe(producto => this.producto = producto);
    console.log(this.producto.nombre);
  }

  getRestrictedData() {
    this.restClient.getRestrictedData().subscribe(
      data => {
        console.log('Success' + data);
        this.message = JSON.stringify(data);
      },
      error => {
        console.error(error);
        this.message = JSON.stringify(error);
      }
    );
  }

  logout() {
    this.restClient.logout().subscribe(data => {
        this.message = 'Logout Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }
}
