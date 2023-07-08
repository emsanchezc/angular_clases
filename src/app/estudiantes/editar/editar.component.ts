import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>
  ) {

    this.editForm = this.formBuilder.group({
      id: [''],
      nombres:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      apellidos:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      celular:['', [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
      correo:['', [Validators.required, Validators.email]],
      linkedin:['', [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^https://linkedin.com/in/[a-zA-Z0-9_.+-]*$')]],
      github:['', [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^https://github.com/[a-zA-Z0-9_.+-]*$')]]
    });
  }

  ngOnInit(): void {
     const estudiante = this.data.id;
     
    this.estudiantesService.consultarEstudiante(estudiante).subscribe(
      (response: any) => {
        
        const estudianteData = response.data[0];
        console.log(estudianteData);
        

        this.editForm.setValue({
          id: estudianteData.estudiante_id,
          nombres: estudianteData.estudiante_nombres,
          apellidos: estudianteData.estudiante_apellidos,
          celular: estudianteData.estudiante_celular,
          correo: estudianteData.estudiante_correo,
          linkedin: estudianteData.estudiante_linkedin,
          github: estudianteData.estudiante_github,
        });
      },
      (error) => {
        console.log(error);
      }
    );

    
    
    
  }


  onSubmit(): void {
    
    if(this.editForm.valid){
      const estudiante = {
        nombres: this.editForm.value.nombres,
        apellidos: this.editForm.value.apellidos,
        celular: Number(this.editForm.value.celular),
        correo: this.editForm.value.correo,
        linkedin: this.editForm.value.linkedin,
        github: this.editForm.value.github,
      }

      this.estudiantesService.actualizarEstudiante(this.editForm.value.id, estudiante).subscribe({
        next: (response: any) => {
          alert('Estudiante actualizado correctamente');
          this.dialogRef.close();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }


  }

}
