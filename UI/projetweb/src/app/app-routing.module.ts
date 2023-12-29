import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'container', component: ContainerComponent},
  {path:'header', component: HeaderComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
