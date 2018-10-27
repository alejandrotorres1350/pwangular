import { Productocantidad2 } from './Productos/shared/productocantidad2';
import { VentaService } from './Productos/shared/venta.service';
import { ProductoService } from './Productos/shared/producto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMenuComponent } from './Productos/productos-menu/productos-menu.component';
import { ProductosAgregarComponent } from './Productos/productos-agregar/productos-agregar.component';
import { ProductosEliminarComponent } from './Productos/productos-eliminar/productos-eliminar.component';
import { ProductosConsultarComponent } from './Productos/productos-consultar/productos-consultar.component';
import { ProductosUpdateComponent } from './Productos/productos-update/productos-update.component';
import { ProductoComponent } from './Productos/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComprarComponent } from './Productos/productos-comprar/productos-comprar.component';
import {FormsModule} from '@angular/forms';
import { ProductoCantidadComponent } from './Productos/producto-cantidad/producto-cantidad.component';
import { FacturaComponent } from './Productos/factura/factura.component';
import { LoginComponent } from './Productos/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosMenuComponent,
    ProductosAgregarComponent,
    ProductosEliminarComponent,
    ProductosConsultarComponent,
    ProductosUpdateComponent,
    ProductoComponent,
    ProductosComprarComponent,
    ProductoCantidadComponent,
    FacturaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductoService, VentaService, Productocantidad2],
  bootstrap: [AppComponent]
})
export class AppModule { }
