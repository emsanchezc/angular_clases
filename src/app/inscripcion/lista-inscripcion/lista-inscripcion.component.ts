import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista-inscripcion',
  templateUrl: './lista-inscripcion.component.html',
  styleUrls: ['./lista-inscripcion.component.css']
})
export class ListaInscripcionComponent implements OnInit {

  consultaForm!: FormGroup;

  cursos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe({
      next:(response: any) => {             
        this.cursos = response.data;  
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  consultarEstudiantes() {
    console.log('Consultar estudiantes');
  }

}
