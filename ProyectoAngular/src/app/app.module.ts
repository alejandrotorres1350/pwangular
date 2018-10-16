import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMenuComponent } from './Productos/productos-menu/productos-menu.component';
import { ProductosAgregarComponent } from './Productos/productos-agregar/productos-agregar.component';
import { ProductosEliminarComponent } from './Productos/productos-eliminar/productos-eliminar.component';
import { ProductosConsultarComponent } from './Productos/productos-consultar/productos-consultar.component';
import {FormsModule} from '@angular/forms';
import { ProductosUpdateComponent } from './Productos/productos-update/productos-update.component';
import { ProductoComponent } from './Productos/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosMenuComponent,
    ProductosAgregarComponent,
    ProductosEliminarComponent,
    ProductosConsultarComponent,
    ProductosUpdateComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
