import { ProductosMenuComponent } from './Productos/productos-menu/productos-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosAgregarComponent } from './Productos/productos-agregar/productos-agregar.component';
import { ProductosEliminarComponent } from './Productos/productos-eliminar/productos-eliminar.component';
import { ProductosConsultarComponent } from './Productos/productos-consultar/productos-consultar.component';
import { ProductosUpdateComponent } from './Productos/productos-update/productos-update.component';
import { ProductoComponent } from './Productos/producto/producto.component';

const routes: Routes = [
  { path: 'productos/menu', component: ProductosMenuComponent },
  { path: 'productos/menu/agregar', component: ProductosAgregarComponent},
  { path: 'productos/menu/eliminar', component: ProductosEliminarComponent},
  { path: 'productos/menu/consultar', component: ProductosConsultarComponent},
  { path: 'productos/menu/actualizar', component: ProductosUpdateComponent},
  { path: 'productos/menu/view/:id', component: ProductoComponent},
  { path: '', pathMatch: 'full', redirectTo: 'productos/menu' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
