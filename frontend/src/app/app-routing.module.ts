import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProyectComponent } from './components/proyect/list-proyect/list-proyect.component';
import { LayoutComponent } from './home/dashboard/layout/layout.component';
import { LandingComponent } from './home/landing/landing/landing.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path:'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListProyectComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
