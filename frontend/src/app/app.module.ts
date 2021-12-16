import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { SaveProyectComponent } from './components/proyect/save-proyect/save-proyect.component';
import { ListProyectComponent } from './components/proyect/list-proyect/list-proyect.component';
import { UpdateProyectComponent } from './components/proyect/update-proyect/update-proyect.component';
import { SaveListComponent } from './components/list/save-list/save-list.component';
import { UpdateListComponent } from './components/list/update-list/update-list.component';
import { ListListComponent } from './components/list/list-list/list-list.component';
import { SaveTaskComponent } from './components/task/save-task/save-task.component';
import { ListTaskComponent } from './components/task/list-task/list-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { SaveUserComponent } from './components/user/save-user/save-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { LandingComponent } from './home/landing/landing/landing.component';
import { LayoutComponent } from './home/dashboard/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    SaveProyectComponent,
    ListProyectComponent,
    UpdateProyectComponent,
    SaveListComponent,
    UpdateListComponent,
    ListListComponent,
    SaveTaskComponent,
    ListTaskComponent,
    UpdateTaskComponent,
    SaveUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    LandingComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
