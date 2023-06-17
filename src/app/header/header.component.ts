import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { citasInterface } from '../citas/local-citas.model';
import { LocalCitasService } from '../citas/local-citas.service';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchTerm: string = '';

  constructor(private router: Router, private userService: UsuariosService, private citasService: LocalCitasService) { }

  search() {
    if (this.searchTerm) {
      this.router.navigate(['/preguntas'], { queryParams: { q: this.searchTerm } });
    }
    console.log("parametro enviado:" + this.searchTerm)
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['Cuenta/regisE']);
      })
      .catch(error => console.log(error));
  }
}

