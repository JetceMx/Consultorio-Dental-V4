import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Auth, updateCurrentUser, user } from '@angular/fire/auth';
import { LocalCitasService } from 'src/app/citas/local-citas.service';
import {Firestore, collection,addDoc, doc,setDoc } from '@angular/fire/firestore';

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
      password: new FormControl(),
      name: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(async response => {
        console.log(response);
        const ruta = "Usuarios";
        let id1 = response.user.uid;
        console.log(response.user.uid)
        await setDoc(doc(this.firestore, ruta, id1), this.formReg.value);

      
        this.router.navigate(['Cuenta/loginE']);
      })
      .catch(error => console.log(error));
  }
}
