import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CrudComponent } from './shared/components/crud/crud.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import ('./components/home/home.module').then(module => module.HomeModule) },
  {path: 'menu', component: MenuComponent},
  {path: 'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
