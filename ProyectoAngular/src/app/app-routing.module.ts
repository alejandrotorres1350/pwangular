import { FacturaComponent } from './Productos/factura/factura.component';
import { ProductoCantidadComponent } from './Productos/producto-cantidad/producto-cantidad.component';
import { ProductosMenuComponent } from './Productos/productos-menu/productos-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosAgregarComponent } from './Productos/productos-agregar/productos-agregar.component';
import { ProductosEliminarComponent } from './Productos/productos-eliminar/productos-eliminar.component';
import { ProductosConsultarComponent } from './Productos/productos-consultar/productos-consultar.component';
import { ProductosUpdateComponent } from './Productos/productos-update/productos-update.component';
import { ProductosComprarComponent } from './Productos/productos-comprar/productos-comprar.component';
import { ProductoComponent } from './Productos/producto/producto.component';
import { LoginComponent } from './Productos/login/login.component';

const routes: Routes = [
  { path: 'productos/menu', component: ProductosMenuComponent },
  { path: 'productos/menu/agregar', component: ProductosAgregarComponent},
  { path: 'productos/menu/eliminar', component: ProductosEliminarComponent},
  { path: 'productos/menu/consultar', component: ProductosConsultarComponent},
  { path: 'productos/menu/actualizar', component: ProductosUpdateComponent},
  { path: 'productos/menu/comprar', component: ProductosComprarComponent},
  { path: 'productos/menu/factura', component: FacturaComponent},
  { path: 'productos/menu/login', component: LoginComponent},
  { path: 'productos/menu/cantidad/:id', component: ProductoCantidadComponent},
  { path: 'productos/menu/view/:id', component: ProductoComponent},
  { path: '', pathMatch: 'full', redirectTo: 'productos/menu/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
