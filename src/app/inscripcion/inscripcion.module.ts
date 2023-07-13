import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaInscripcionComponent } from './lista-inscripcion/lista-inscripcion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaInscripcionComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class InscripcionModule { }
