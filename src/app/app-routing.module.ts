import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './usuarios/login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { ResetPasswordComponent } from './usuarios/reset-password/reset-password.component';
import { TemplateComponent } from './main-container/template/template.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'main', component: TemplateComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', redirectTo: '/login' }  // Redirige todas las rutas no encontradas a '/login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
