import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Modulos de material
 */
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ResetPasswordComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    LoginComponent,
    RegistroComponent,
    ResetPasswordComponent,
    PerfilComponent
  ]
})
export class UsuariosModule { }
