import { Component, OnInit } from '@angular/core';

import { Auth, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { UsuariosService } from 'src/app/usuarios.service';



@Component({
  selector: 'app-login-t',
  templateUrl: './login-t.component.html',
  styleUrls: ['./login-t.component.css']
})
export class LoginTComponent implements OnInit{
  auth:Auth = getAuth();
  appVerifier!:RecaptchaVerifier;
  appVerifierRegistro!:RecaptchaVerifier;
  confirmResult!: any;
  LoginT:FormGroup;
  LoginT2:FormGroup;

  constructor(
    private userService:UsuariosService) {
      this.LoginT=new FormGroup({
        telefono:new FormControl(),
        codigo:new FormControl()
      });
      this.LoginT2=new FormGroup({
        codigo:new FormControl()
      });

  }



  ngOnInit(): void {
   console.log(this.auth.currentUser)

    this.appVerifier = new RecaptchaVerifier('rec-container', {
      'size': 'normal',
      'callback': () => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, this.auth);
    this.appVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }
  loginT(){
    let phone:string = this.LoginT.value.telefono || "";
    signInWithPhoneNumber(this.auth,phone,this.appVerifier).then((confirmResult)=>{
      this.confirmResult = confirmResult;
      console.log(confirmResult)
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  }

  ValiC(){
    let code:string=this.LoginT2.value.codigo || "";
    console.log("Entre en fun")
    console.log(this.confirmResult)
   if(this.confirmResult){
    console.log("Entre en if")
   this.confirmResult.confirm(code).then((result: any)=>{
    console.log(result);
   })
   }
   }
}


