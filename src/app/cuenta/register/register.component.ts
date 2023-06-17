import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { AlertifyService } from 'src/app/alertify.service';
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

  constructor(private alerta: AlertifyService, private userService: UsuariosService, private router: Router, private formBuilder: FormBuilder, private firestore: Firestore) {
    this.formReg = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordVer: new FormControl('', [Validators.required,])
    }, { validators: this.passwordMatchValidator })
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
        this.alerta.success("Cuenta registrada!");
        this.router.navigate(['Cuenta/loginE']);
      })
      .catch(error => console.log(error));
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control?.get('password')?.value;
    const confirmPassword = control?.get('passwordVer')?.value;

    if (password !== confirmPassword) {
      control?.get('passwordVer')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }
}
