import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOrderComponent } from './form-order/form-order.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ 
  path: '',
  component: HomeComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: '/'},
    {path: 'order', component: FormOrderComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
