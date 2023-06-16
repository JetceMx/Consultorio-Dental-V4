import { Component } from '@angular/core';
import { signInWithPhoneNumber } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import { getAuth } from "firebase/auth";
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private userService: UsuariosService,
    private alerta: AlertifyService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      numero: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);
        this.alerta.error('Error en la contraseña o correo');
      });
  }



}
