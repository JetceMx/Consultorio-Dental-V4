import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private alerta: AlertifyService,
    private userService:UsuariosService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordVer: new FormControl('', [Validators.required,])
    })
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


}
