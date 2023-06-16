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
  cita: citasInterface[];
  filterPost = '';
  parametro: string = ""

  constructor(
    private userService: UsuariosService,
    private router: Router, private citasService: LocalCitasService

  ) {
    this.cita = [{
      nombre: "Juan",
      apellidos: "Teran",
      edad: "20",
      telefono: "4444",
      correo: "13@gmail.com",
      fecha: "11-12-2023",
      hora: "14-23",
      tipoCita: "",
      sucursal: ""
    }]
  }


  ngOnInit(): void {
    /*this.citasService.getregis().subscribe(cita => {
      console.log(cita);
      this.cita = cita;
    })*/
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['Cuenta/regisE']);
      })
      .catch(error => console.log(error));
  }
  Buscar() {
    const navigationExtras: NavigationExtras = {
      queryParams: { parametro: this.parametro }
    }
    this.router.navigateByUrl('/busqueda', navigationExtras)
    console.log(this.parametro)
  }
}
