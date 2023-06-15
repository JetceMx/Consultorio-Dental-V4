import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Auth, updateCurrentUser, user } from '@angular/fire/auth';
import { LocalCitasService } from 'src/app/citas/local-citas.service';
import {Firestore, collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formReg: FormGroup;

  constructor(
    private userService:UsuariosService,
    private router: Router,
    private firestore:Firestore
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        /*const ruta = "Usuarios";
        let id1 = response.user.uid;
        const usrRef= collection(this.firestore,ruta,id1);

       addDoc(usrRef,this.formReg.value);*/
        this.router.navigate(['Cuenta/loginE']);
      })
      .catch(error => console.log(error));
  }
}
