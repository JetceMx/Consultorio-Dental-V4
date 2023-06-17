import { DatePipe, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalCitasService } from '../local-citas.service';
import { AlertifyService } from 'src/app/alertify.service';
import { citasInterface } from '../local-citas.model';
import { CitaService } from '../../cita.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {


  mensajeEnviado: boolean = false;

  contactForm(formulario: any) {
    this.CitaService.sendMessage(formulario).subscribe(() => {
      this.mensajeEnviado = true;
    });
  }

  arrayCitas: citasInterface[] | any;

  public fechaMinima!: Date;
  public horaMinima!: Time;
  public forma!: FormGroup;

  public fechaStrMinima!: string | null;
  public horaStrMinima!: string | null;

  usuario: any = {
    nombre: "usuario",
    apellidos: "Perez",
    edad: "60",
    telefono: "4491234567",
    correo: "example@gmail.com",
    fecha: "",
    hora: "01:00",
    tipoCita: "",
    sucursal: "",
  }


  constructor(private pd: DatePipe, private citasService: LocalCitasService, private alerta: AlertifyService, public CitaService: CitaService) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', [Validators.required]),
      'edad': new FormControl('', [Validators.required]),
      'telefono': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'fecha': new FormControl('', [Validators.required]),
      'hora': new FormControl('', [Validators.required, this.validacionDeHora]),
      'tipoCita': new FormControl('', [Validators.required]),
      'sucursal': new FormControl('', [Validators.required])
    });
    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
    this.fechaMinima = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.fechaStrMinima = this.pd.transform(this.fechaMinima, "YYYY-MM-dd");
    console.log(this.fechaStrMinima);
    /*
    this.arrayCitas = this.citasService.getArrayCitas();*/

  }
  async onSubmit() {
    console.log(this.forma.value)
    switch (this.forma.value.tipoCita) {
      case 'Revision y diagnostico':
        let response = await this.citasService.addregis(this.forma.value);
        console.log(response);
        this.alerta.success("Tu cita quedo registrada exitosamente");
        break;
      case 'Tratamientos esteticos':
        await this.citasService.addregis2(this.forma.value);

        this.alerta.success("Tu cita quedo registrada exitosamente");
        break;
      case 'Tratamientos medicos':
        await this.citasService.addregis3(this.forma.value);

        this.alerta.success("Tu cita quedo registrada exitosamente");
        break;
      case 'Limpieza':
        await this.citasService.addregis4(this.forma.value);

        this.alerta.success("Tu cita quedo registrada exitosamente");
        break;
      case 'Urgencias':
        await this.citasService.addregis5(this.forma.value);

        this.alerta.success("Tu cita quedo registrada exitosamente");
        break;
    }
  }

  /*guardarCambios(): void {
    this.citasService.agregarCita(this.forma.value);
    this.usuario = this.citasService.nuevaCita();
    this.forma.reset(this.usuario);

  }*/

  validacionDeHora(control: FormControl): { [s: string]: boolean } | null {
    if (control.value < "13:00" || control.value >= "20:00") {
      return {
        validacionDeHora: false
      }
    }
    return null
  }

}
