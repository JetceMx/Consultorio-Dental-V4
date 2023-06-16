import { Component, OnInit } from '@angular/core';
import { citasInterface } from '../local-citas.model';
import { LocalCitasService } from '../local-citas.service';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit {

  citaRyD: citasInterface[];
  citaEst: citasInterface[];
  citaMed: citasInterface[];
  citaLim: citasInterface[];
  citaUrg: citasInterface[];

  filterPost = '';

  constructor(private citasService: LocalCitasService) {
    this.citaRyD = [{
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      sucursal: ""
    }]

    this.citaEst = [{
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      sucursal: ""
    }]

    this.citaMed = [{
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      sucursal: ""
    }]

    this.citaLim = [{
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      sucursal: ""
    }]

    this.citaUrg = [{
      nombre: "",
      apellidos: "",
      edad: "",
      telefono: "",
      correo: "",
      fecha: "",
      hora: "",
      tipoCita: "",
      sucursal: ""
    }]

  }

  ngOnInit() {
    this.bajarDatosFire();
  }

  bajarDatosFire(): void {
    this.citasService.getregisRyD().subscribe(cita => {
      this.citaRyD = cita;
    })
    this.citasService.getregisEst().subscribe(cita => {
      this.citaEst = cita;
    })
    this.citasService.getregisMed().subscribe(cita => {
      this.citaMed = cita;
    })
    this.citasService.getregisLim().subscribe(cita => {
      this.citaLim = cita;
    })
    this.citasService.getregisUrg().subscribe(cita => {
      this.citaUrg = cita;
    })
  }

  async onClickDelete(cita: citasInterface) {
    const response = await this.citasService.deleteregis(cita);
    console.log(response);
  }

}


