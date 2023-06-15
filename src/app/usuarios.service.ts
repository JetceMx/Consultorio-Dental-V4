import { Injectable } from '@angular/core';
import { Auth,RecaptchaVerifier,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPhoneNumber, user, updateCurrentUser} from '@angular/fire/auth';

declare global{
  interface Window{
    recaptchaVerifier: RecaptchaVerifier;
    response:any;
    grecapcta:any;
    recaptchaWidgetId:any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  get windowRef() {
    return window
  }
  constructor(private auth: Auth) {
    const nume="";
  }



  register({ email, password }: any) {

    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    console.log(email + password);

    return signInWithEmailAndPassword(this.auth, email, password);

  }

  logout() {
    console.log()
    return signOut(this.auth);

  }
}
