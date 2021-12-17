import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './home/dashboard/layout/layout.component';
import { HomeComponent } from './home/dashboard/home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  { 
    path: 'dashboard',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'prueba',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
