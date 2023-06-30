import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensaje: string;

  constructor(private router: Router){
    this.mensaje = "Bienvenido";
  }

  onSubmit(){
    
    sessionStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/perfil'])
  }



}
