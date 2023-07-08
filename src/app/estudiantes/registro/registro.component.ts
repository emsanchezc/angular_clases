import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  tiposIdentificacion = [
    {value: 1, viewValue: 'Cédula de ciudadanía'},
    {value: 2, viewValue: 'Tarjeta de identidad'},
    {value: 3, viewValue: 'Pasaporte'},
  ];

  constructor(
    private fb: FormBuilder,
    private estudiantesService: EstudiantesService,
    public dialogRef: MatDialogRef<RegistroComponent>
  ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      tipoIdentificacion:['', [Validators.required]],
      numeroIdentificacion:['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
      nombres:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      apellidos:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]],
      celular:['', [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]],
      correo:['', [Validators.required, Validators.email]],
      linkedin:['https://linkedin.com/in/', [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^https://linkedin.com/in/[a-zA-Z0-9_.+-]*$')]],
      github:['https://github.com/', [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^https://github.com/[a-zA-Z0-9_.+-]*$')]]
    });
  }


  onSubmit(){

    if(this.registroForm.valid){
      
      console.log(this.registroForm.value);

      const estudiante = {
        tipoIdentificacion: Number(this.registroForm.value.tipoIdentificacion),
        numeroIdentificacion: Number(this.registroForm.value.numeroIdentificacion),
        nombres: this.registroForm.value.nombres,
        apellidos: this.registroForm.value.apellidos,
        celular: Number(this.registroForm.value.celular),
        correo: this.registroForm.value.correo,
        linkedin: this.registroForm.value.linkedin,
        github: this.registroForm.value.github
      }

      this.estudiantesService.registrarEstudiante(estudiante).subscribe({
        next: (response: any) => {
          console.log(response);
          alert("Estudiante registrado correctamente");
          this.dialogRef.close();

        },
        error: (error) => {
          if(error.error?.message instanceof Array){
            let errorMessage = '';
            error.error.message.forEach((err:any, index: number) => {
              errorMessage += `${index+1}. ${err} \n`;              
            });

            alert(errorMessage);

          }else{
            alert("Ha ocurrido un error desconocido");
          }
        }
      });



    }else{
      this.registroForm.markAllAsTouched();
    }
    
  }

}
