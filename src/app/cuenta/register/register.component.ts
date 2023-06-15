import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { formRegInterface } from '../formReg.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formularioRegistro: formRegInterface = {
    nombre: "",
    apellido: "",
    correo: "",
    contra: "",
    rol: "Paciente"
  };

  formReg: FormGroup;

  constructor(
    private userService: UsuariosService,
    private router: Router,
    private firestore: Firestore
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
    })
  }

  ngOnInit(): void { }

  copiarDatos(): void {
    this.formularioRegistro.nombre = this.formReg.value.name;
    this.formularioRegistro.apellido = this.formReg.value.lastname;
    this.formularioRegistro.correo = this.formReg.value.email;
    this.formularioRegistro.contra = this.formReg.value.password;
    console.log(this.formularioRegistro);
  }

  onSubmit() {
    this.copiarDatos();
    this.userService.register(this.formReg.value)
      .then(async response => {
        console.log(response);
        const ruta = "Usuarios";
        let id1 = response.user.uid;
        console.log(response.user.uid)
        await setDoc(doc(this.firestore, ruta, id1), this.formularioRegistro);
        this.router.navigate(['Cuenta/loginE']);
      })
      .catch(error => console.log(error));
  }
}
