import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ListProductsComponent } from './components/shared/list-products/list-products.component';
import { CrudComponent } from './shared/components/crud.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import ('./components/home/home.module').then(module => module.HomeModule) },
  {path: 'menu', component: MenuComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'list', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
