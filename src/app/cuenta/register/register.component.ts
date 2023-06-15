import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../usuarios.service';
import { AlertifyService } from 'src/app/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formReg: FormGroup;

  constructor(private alerta: AlertifyService, private userService:UsuariosService, private router: Router, private formBuilder: FormBuilder) {
    this.formReg = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordVer: new FormControl('', [Validators.required,])
    }, { validators: this.passwordMatchValidator })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
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
