import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

const routes: Routes = [

 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'product/list',
    component: ListProductComponent
  },
  {
    path: 'product/edit/:id',
    component: EditProductComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
