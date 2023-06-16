import { Component } from '@angular/core';
import {Auth, onAuthStateChanged, user } from '@angular/fire/auth';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  constructor(private userService: UsuariosService,private auth: Auth,private router: Router,private alerta: AlertifyService){

  }


  agendar(){
     const user = this.auth.currentUser
      if (user) {
        this.router.navigate(['citas/agendar']);
      } else {
        this.alerta.error('Debes iniciar sesion para poder agendar cita');
      }
  }
  revisar(){
    const user = this.auth.currentUser
    if (user) {
      this.router.navigate(['citas/revisar']);
    } else {
      this.alerta.error('Solo los administradores tienen acceso a esta pagina');
    }
  }
}
